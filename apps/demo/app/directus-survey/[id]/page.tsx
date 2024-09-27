import { initDirectusQuery } from '@okam/directus-query'
import { DirectusSurvey } from '@okam/stack-ui'
import { FormConfigDocument, FormConfigFragmentDoc, useFragment } from 'libs/directus-data-query/survey'

export default async function Index({ params }: { params: { id: string } }) {
  const token = process.env.DIRECTUS_FORM_API_TOKEN
  const directusUrl = 'https://survey-demo.okam.one'
  const queryClient = initDirectusQuery(`${directusUrl}/graphql`, {
    credentials: 'include',
    mode: 'cors',
    fetch,
  })

  const id = params?.id

  const formConfigDoc = await queryClient.queryGql(FormConfigDocument, { id })
  const formConfig = useFragment(FormConfigFragmentDoc, formConfigDoc.form_configs_by_id)

  return (
    <DirectusSurvey
      schema={formConfig?.schema}
      formConfigId={id}
      fieldMap={formConfig?.field_map}
      versionDate={formConfig?.date_updated}
      directusApiKey={token}
      directusUrl={directusUrl}
    />
  )
}
