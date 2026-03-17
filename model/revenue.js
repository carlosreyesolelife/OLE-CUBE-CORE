cube(`revenue`, {
  sql: `
    SELECT * 
    FROM olelifetech.gold_zone.fact_quotation_policies
    WHERE date_upload = CURRENT_DATE()
  `,

  joins: {
    dim_status: {
      sql: `${revenue}.status_sk = ${dim_status}.status_sk`,
      relationship: `belongsTo`
    },
    dim_advisor: {
      sql: `${revenue}.ADVISOR_SK = ${dim_advisor}.ADVISOR_SK`,
      relationship: `belongsTo`
    },
    dim_plan: {
      sql: `${revenue}.plan_sk = ${dim_plan}.PLAN_SK`,
      relationship: `belongsTo`
    },
    dim_product: {
      sql: `${revenue}.product_sk = ${dim_product}.product_sk`,
      relationship: `belongsTo`
    },
    dim_calendar: {
      sql: `${revenue}.send_date = ${dim_calendar}.date`,
      relationship: `belongsTo`
    }
  },

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
    status: {
      sql: `status`,
      type: `string`
    },
    annual_premium: {
      sql: `annual_premium`,
      type: `number`
    },
    approval_date: {
      sql: `CAST(approval_date AS TIMESTAMP)`,
      type: `time`
    },
    payment_date: {
      sql: `CAST(payment_date AS TIMESTAMP)`,
      type: `time`
    },
    send_date: {
      sql: `CAST(send_date AS TIMESTAMP)`,
      type: `time`
    }
  }
});