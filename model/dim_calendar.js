cube(`dim_calendar`, {
  sql: `SELECT * FROM olelifetech.gold_zone.dim_calendar`,

  dimensions: {
    date: {
      sql: `date`,
      type: `time`,
      primaryKey: true
    },
    month: {
      sql: `month`,
      type: `number`
    },
    month_name: {
      sql: `month_name`,
      type: `string`
    },
    quarter: {
      sql: `quarter`,
      type: `string`
    },
    year: {
      sql: `year`,
      type: `number`
    },
    week: {
      sql: `week`,
      type: `number`
    }
  }
});