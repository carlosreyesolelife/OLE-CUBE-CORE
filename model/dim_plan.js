cube(`dim_plan`, {
  sql: `SELECT * FROM olelifetech.gold_zone.dim_plan`,

  dimensions: {
    plan_sk: {
      sql: `PLAN_SK`,
      type: `number`,
      primaryKey: true
    },
    plan_name: {
      sql: `plan_name`,
      type: `string`
    },
    plan_code: {
      sql: `plan_code`,
      type: `string`
    },
    plan_description: {
      sql: `plan_description`,
      type: `string`
    }
  }
});