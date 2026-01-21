# Review Comments

## High
- `libs/stack/stack-ui/src/index.ts:7`: stack-ui intentionally shifted core components (e.g. `Box`, `Button`, `Typography`, `Popover`, `Checkbox`, `Select`, `TextInputField`) to named-only exports to suppress warnings and improve tree-shaking. This still breaks default-import consumers, so add a clear migration note/codemod or compatibility re-exports (and ensure versioning reflects the break).

## Medium
- `package.json`: root `engines.node` was removed while NX 22 requires Node >=20.19.0. This weakens enforcement and can lead to CI/Vercel builds running older 20.x minors that fail at runtime. Consider re-adding an engine pin and a `.nvmrc` (e.g. `24`) if you want to standardize on Vercel’s default Node 24.

## Low
- `apps/demo/app/directus-next-component/directus-link/BrandDirectusLink.tsx:1`: the client component imports `getDirectusLink` from `@okam/directus-next-component/server`. If that entry is ever marked server-only (or gains `server-only` directives), this will break client bundling. Prefer importing from `@okam/directus-next-component` to keep the client boundary clean.
