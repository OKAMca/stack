import { DirectusFile } from '@okam/directus-next-component/server'

export default function Index() {
  // Changing width height and fit should change the image size/cropping
  return <DirectusFile id="fbae19f3-8739-4048-a20f-89ebbf59b032" width={200} height={200} fit="cover" type="image" />
}
