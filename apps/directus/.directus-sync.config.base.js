// ./directus-sync.config.js
const testPrefix = 'Test:'

module.exports = {
  debug: true,
  collectionsPath: 'collections',
  excludeCollections: ['settings', 'presets',  'dashboards', 'panels'],
  preserveIds: 'all', // can be '*' or 'all' to preserve all ids, or an array of collections
  snapshotPath: 'snapshot',
  snapshot: true,
  split: true,
  specs: false,
  hooks: {
    settings: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onQuery: (query, client) => {
        query.filter = {
          ...query.filter,
          name: { _nstarts_with: 'project_' },
        }
        return query
      },
    },
    flows: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onQuery: (query, client) => {
        query.filter = {
          ...query.filter,
          name: { _nstarts_with: testPrefix },
        }
        return query
      },
    },
    operations: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onQuery: (query, client) => {
        query.filter = {
          ...query.filter,
          flow: { name: { _nstarts_with: testPrefix } },
        }
        return query
      },
    },
  },
}
