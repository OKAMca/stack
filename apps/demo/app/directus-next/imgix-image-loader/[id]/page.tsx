import type { ReactNode } from 'react'
import { DirectusImg } from '@okam/directus-next-component'

/**
 * Manual test bench for `imgixImageLoader`.
 *
 * Each case renders a `DirectusImg` and captions the imgix params it should
 * produce. Open the network panel (or read each `<img srcset>`) to verify the
 * generated `https://<subdomain>.imgix.net/...` URLs against the captions.
 *
 * Requires `NEXT_PUBLIC_IMGIX_SUBDOMAIN` to be set; otherwise the loader falls
 * back to `directusImageLoader` and serves straight from Directus.
 */

// Declared dimensions of a landscape asset. In real usage these come from the
// Directus file record. `getDirectusImg` bakes them onto the URL as Directus
// params; the loader turns width/height into the crop aspect ratio (`ar`).
const LANDSCAPE = { width: 1600, height: 900 } as const

const BOX = 'relative h-64 w-64 overflow-hidden rounded border border-neutral-300 bg-neutral-100'

function Case({ title, note, children }: { title: string, note: string, children: ReactNode }) {
  return (
    <figure className="flex w-64 flex-col gap-2">
      <div className={BOX}>{children}</div>
      <figcaption className="flex flex-col gap-0.5">
        <span className="text-sm font-semibold">{title}</span>
        <span className="font-mono text-xs text-neutral-500">{note}</span>
      </figcaption>
    </figure>
  )
}

function Section({ title, description, children }: { title: string, description: string, children: ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="max-w-3xl text-sm text-neutral-600">{description}</p>
      </div>
      <div className="flex flex-wrap gap-6">{children}</div>
    </section>
  )
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const file = { id, filename_download: 'image.jpg' } as const

  return (
    <div className="flex flex-col gap-12 p-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">imgix image loader test bench</h1>
        <p className="max-w-3xl text-sm text-neutral-600">
          Every case lists the imgix params it should generate. All requests also carry
          {' '}
          <code className="font-mono">auto=format,compress</code>
          {' '}
          and a responsive
          {' '}
          <code className="font-mono">w</code>
          {' '}
          (one call per srcset candidate). Inspect the network panel to confirm.
        </p>
      </header>

      <Section
        title="1. Fit modes"
        description="Directus fit → imgix fit: cover→crop, contain→fill, inside→max, outside→min. Landscape 1600×900 declared, shown in a square box. Only cover emits ar (it is the only cropping fit)."
      >
        <Case title="cover → crop" note="fit=crop, ar=1600:900, crop=entropy">
          <DirectusImg {...file} {...LANDSCAPE} fit="cover" className="h-full w-full object-cover" />
        </Case>
        <Case title="contain → fill" note="fit=fill">
          <DirectusImg {...file} {...LANDSCAPE} fit="contain" className="h-full w-full object-contain" />
        </Case>
        <Case title="inside → max" note="fit=max (no ar/h; w-constrained)">
          <DirectusImg {...file} {...LANDSCAPE} fit="inside" className="h-full w-full object-contain" />
        </Case>
        <Case title="outside → min" note="fit=min (no ar/h; w-constrained)">
          <DirectusImg {...file} {...LANDSCAPE} fit="outside" className="h-full w-full object-cover" />
        </Case>
      </Section>

      <Section
        title="2. Focal-point crop"
        description="Square 1000×1000 crop target from the landscape source, so imgix must crop horizontally. focal_point_x moves the crop; fp fractions divide by the declared width/height (fp-x = focal_point_x / 1000). Watch the crop follow the focal point across each entry."
      >
        <Case title="Focal left" note="crop=focalpoint, fp-x=0.1, fp-y=0.5">
          <DirectusImg {...file} width={1000} height={1000} focal_point_x={100} focal_point_y={500} fit="cover" className="h-full w-full object-cover" />
        </Case>
        <Case title="Focal center" note="crop=focalpoint, fp-x=0.5, fp-y=0.5">
          <DirectusImg {...file} width={1000} height={1000} focal_point_x={500} focal_point_y={500} fit="cover" className="h-full w-full object-cover" />
        </Case>
        <Case title="Focal right" note="crop=focalpoint, fp-x=1, fp-y=0.5">
          <DirectusImg {...file} width={1000} height={1000} focal_point_x={1000} focal_point_y={500} fit="cover" className="h-full w-full object-cover" />
        </Case>
        <Case title="No focal → entropy" note="crop=entropy (no focal-point data)">
          <DirectusImg {...file} width={1000} height={1000} fit="cover" className="h-full w-full object-cover" />
        </Case>
      </Section>

      <Section
        title="3. Quality"
        description="The next/image quality prop maps straight to imgix q. Compare file sizes / compression artifacts between the two."
      >
        <Case title="Low quality" note="q=10">
          <DirectusImg {...file} {...LANDSCAPE} fit="cover" quality={10} className="h-full w-full object-cover" />
        </Case>
        <Case title="High quality" note="q=90">
          <DirectusImg {...file} {...LANDSCAPE} fit="cover" quality={90} className="h-full w-full object-cover" />
        </Case>
      </Section>

      <Section
        title="4. Without enlargement"
        description="withoutEnlargement=true is not a next/image prop, so it rides on the new searchParams prop. The loader maps it to upscale=false, preventing imgix from scaling past the source. Compare natural sizes at large widths in the network panel."
      >
        <Case title="Default (may upscale)" note="no upscale param">
          <DirectusImg {...file} {...LANDSCAPE} fit="cover" className="h-full w-full object-cover" />
        </Case>
        <Case title="withoutEnlargement" note="upscale=false">
          <DirectusImg
            {...file}
            {...LANDSCAPE}
            fit="cover"
            searchParams={new URLSearchParams({ withoutEnlargement: 'true' })}
            className="h-full w-full object-cover"
          />
        </Case>
      </Section>

      <Section
        title="5. Fill + responsive sizing"
        description="fill forbids the width/height props, so crop dimensions and focal point travel via searchParams. The sizes prop drives which srcset candidate the browser downloads — omit it and next/image defaults to 100vw, over-fetching the largest candidate."
      >
        <Case title="Fill + correct sizes" note="sizes=256px → small w; ar+focal via searchParams">
          <DirectusImg
            {...file}
            fill
            fit="cover"
            sizes="256px"
            searchParams={new URLSearchParams({ width: '1000', height: '1000', focal_point_x: '1000', focal_point_y: '500' })}
            className="object-cover"
          />
        </Case>
        <Case title="Fill, no sizes" note="defaults to 100vw → over-fetches large w">
          <DirectusImg {...file} fill fit="cover" className="object-cover" />
        </Case>
        <figure className="flex w-full flex-col gap-2">
          <div className="relative h-64 w-full overflow-hidden rounded border border-neutral-300 bg-neutral-100 sm:w-1/2 lg:w-1/3">
            <DirectusImg
              {...file}
              fill
              fit="cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              searchParams={new URLSearchParams({ width: '1600', height: '900' })}
              className="object-cover"
            />
          </div>
          <figcaption className="flex flex-col gap-0.5">
            <span className="text-sm font-semibold">Fill + multi-viewport sizes</span>
            <span className="font-mono text-xs text-neutral-500">
              sizes=&quot;(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw&quot; — box is full width on mobile, ½ on tablet, ⅓ on desktop; resize the viewport and watch the chosen srcset candidate (w) change.
            </span>
          </figcaption>
        </figure>
      </Section>
    </div>
  )
}
