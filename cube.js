const { CubejsServer } = require('@cubejs-backend/server');

module.exports = {
  apiSecret: process.env.CUBEJS_API_SECRET,

  dbType: 'bigquery',

  driverFactory: () => ({
    type: 'bigquery',
    projectId: process.env.CUBEJS_DB_BQ_PROJECT_ID,
    //credentials: JSON.parse(process.env.CUBEJS_DB_BQ_CREDENTIALS)
  }),

  scheduledRefreshContexts: () => [{
    securityContext: {}
  }],

  queryRewrite: (query, { securityContext }) => {
    return query;
  }
};