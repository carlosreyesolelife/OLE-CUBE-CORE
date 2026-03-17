cube(`revenue`, {
  sql: `SELECT * FROM olelifetech.gold_zone.fact_full_company_quotation_policies`,

  measures: {
    approved_apps: {
      type: `number`,
      sql: `COUNT(DISTINCT CASE WHEN approval_date IS NOT NULL THEN nro_application END)`
    },
    activated_policies: {
      type: `number`,
      sql: `COALESCE(COUNT(DISTINCT CASE WHEN payment_date IS NOT NULL AND status IN ('ACTIVE', 'GRACE PERIOD') THEN nro_application END), 0)`
    },
    activated_prm: {
      type: `number`,
      sql: `COALESCE(SUM(CASE WHEN payment_date IS NOT NULL AND status IN ('ACTIVE', 'GRACE PERIOD') THEN annual_premium END), 0)`
    },
    approved_prm: {
      type: `number`,
      sql: `SUM(CASE WHEN approval_date IS NOT NULL THEN annual_premium END)`
    }
  },

    dimensions: {
    nro_application: {
      sql: `nro_application`,
      type: `string`,
      primaryKey: true
    },

    createdAt: {
      sql: `CAST(\`created\` AS TIMESTAMP)`,  // ✅ BigQuery usa backticks y TIMESTAMP
      type: `time`
    }
  }
});