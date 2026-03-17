cube(`dim_status`, {
  sql: `SELECT * FROM olelifetech.gold_zone.dim_status`,

  dimensions: {
    status_sk: {
      sql: `status_sk`,
      type: `number`,
      primaryKey: true
    },
    status_name: {
      sql: `status_name`,
      type: `string`
    },
    status_description: {
      sql: `status_description`,
      type: `string`
    }
  }
});