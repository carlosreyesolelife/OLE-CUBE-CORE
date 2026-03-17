cube(`dim_advisor`, {
  sql: `SELECT * FROM olelifetech.gold_zone.dim_advisor`,

  dimensions: {
    advisor_sk: {
      sql: `ADVISOR_SK`,
      type: `number`,
      primaryKey: true
    },
    advisor_name: {
      sql: `advisor_name`,
      type: `string`
    },
    advisor_code: {
      sql: `advisor_code`,
      type: `string`
    },
    advisor_email: {
      sql: `advisor_email`,
      type: `string`
    }
  }
});