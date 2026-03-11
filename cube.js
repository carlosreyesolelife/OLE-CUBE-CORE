module.exports = {
  apiSecret: process.env.CUBEJS_API_SECRET,
  dbType: 'bigquery',

  driverFactory: () => ({
    type: 'bigquery',
    projectId: process.env.CUBEJS_DB_BQ_PROJECT_ID,
  }),

  sqlPort: 15432,

  scheduledRefreshContexts: () => [
    {
      securityContext: {},
    },
  ],

  queryRewrite: (query) => query,
};