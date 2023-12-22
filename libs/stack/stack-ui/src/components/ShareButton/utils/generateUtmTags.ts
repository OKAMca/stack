const generateUtmTags = (source: string, medium: string, campaign = 'sharing_tool') =>
  `?utm_source=${source}&utm_medium=${medium}&utm_campaign=${campaign}`

export default generateUtmTags
