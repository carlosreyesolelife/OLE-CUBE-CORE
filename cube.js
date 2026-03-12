module.exports = {
  dbType: "bigquery",

  driverFactory: () => ({
    type: "bigquery",
    projectId: process.env.CUBEJS_DB_BQ_PROJECT_ID,
  })
};