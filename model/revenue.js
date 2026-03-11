cube(`revenue`, {
  sql: `SELECT * FROM olelifetech.gold_zone.fact_full_company_quotation_policies`,

  measures: {
    revenue: {
      type: `sum`,
      sql: `annual_premium`
    }
  },

  dimensions: {
    createdAt: {
      sql: `created`,
      type: `time`
    }
  }
});