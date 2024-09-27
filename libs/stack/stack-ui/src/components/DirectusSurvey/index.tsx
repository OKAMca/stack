'use client'

/* eslint-disable @typescript-eslint/naming-convention */

import { useCallback } from 'react'
import { Model } from 'survey-core'
import { Survey } from 'survey-react-ui'
import type { JsonObject, TDirectusSurveyProps } from './interface'
import surveyTheme from './theme'
import 'survey-core/defaultV2.min.css'
import 'survey-core/survey.i18n'

const directusDomain = process.env.NEXT_PUBLIC_DIRECTUS_URL
const directusToken = process.env.NEXT_PUBLIC_API_TOKEN

const DirectusSurvey = (props: TDirectusSurveyProps) => {
  const {
    locale = 'en-US',
    schema,
    formConfigId,
    fieldMap,
    additionalData,
    versionDate,
    theme,
    customCSS,
    directusUrl,
    directusApiKey,
  } = props
  const survey = new Model(schema)
  survey.locale = locale
  survey.applyTheme(surveyTheme ?? theme)
  survey.css = customCSS

  // Survey onComplete handler
  const saveSurveyResults = (url: string, json: JsonObject) => {
    const entriesFieldMap = Object.entries(fieldMap ?? {})

    const mappedFields = entriesFieldMap.map(([key, value]) => {
      if (typeof value === 'string' && json?.[value]) {
        return [key, json?.[value]]
      }
      return null
    })

    const filteredFields = mappedFields.filter((el) => el !== null)
    const defaultSumbission = {
      form_data: {
        ...json,
        ...additionalData,
      },
      form_config: formConfigId,
      form_config_version_date: versionDate,
      form_language: {
        code: locale,
      },
    }
    const body = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: Vercel not able to correctly parse type for null here
      ...Object.fromEntries(filteredFields),
      ...additionalData,
      ...defaultSumbission,
      default_fields: {
        ...defaultSumbission,
      },
    }

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: `Bearer ${directusApiKey ?? directusToken}`,
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.ok) {
          // Handle success
        } else {
          // Handle error
        }
      })
      .catch((error) => {
        // Handle error
      })
  }

  const handleComplete = useCallback((form: Model) => {
    saveSurveyResults(`${directusUrl ?? directusDomain}/survey-api/form-submission/${formConfigId}`, form.data)
  }, [])

  survey.onComplete.add(handleComplete)

  return <Survey model={survey} />
}

export default DirectusSurvey
