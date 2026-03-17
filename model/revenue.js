cube(`revenue`, {
  sql: `
    SELECT 
      a.*,
      c.advisor_name,
      c.advisor_code,
      c.advisor_email,
      d.status_name,
      d.status_description,
      e.date,
      e.month,
      e.month_name,
      e.quarter,
      e.year,
      e.week,
      f.plan_name,
      f.plan_code,
      f.plan_description,
      g.product_name,
      g.product_code,
      g.product_description
    FROM olelifetech.gold_zone.fact_quotation_policies a
    LEFT JOIN olelifetech.gold_zone.dim_advisor c ON a.ADVISOR_SK = c.ADVISOR_SK
    LEFT JOIN olelifetech.gold_zone.dim_status d ON a.status_sk = d.status_sk
    LEFT JOIN olelifetech.gold_zone.dim_calendar e ON a.send_date = e.date
    LEFT JOIN olelifetech.gold_zone.dim_plan f ON a.plan_sk = f.PLAN_SK
    LEFT JOIN olelifetech.gold_zone.dim_product g ON a.product_sk = g.product_sk
    WHERE a.date_upload = CURRENT_DATE()
  `,

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

    // ✅ Dimensiones de la fact
    status: {
      sql: `status`,
      type: `string`
    },
    approval_date: {
      sql: `approval_date`,
      type: `time`
    },
    payment_date: {
      sql: `payment_date`,
      type: `time`
    },
    send_date: {
      sql: `send_date`,
      type: `time`
    },
    createdAt: {
      sql: `CAST(created AS TIMESTAMP)`,
      type: `time`
    },

    // ✅ dim_advisor
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
    },

    // ✅ dim_status
    status_name: {
      sql: `status_name`,
      type: `string`
    },
    status_description: {
      sql: `status_description`,
      type: `string`
    },

    // ✅ dim_calendar
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
    },

    // ✅ dim_plan
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
    },

    // ✅ dim_product
    product_name: {
      sql: `product_name`,
      type: `string`
    },
    product_code: {
      sql: `product_code`,
      type: `string`
    },
    product_description: {
      sql: `product_description`,
      type: `string`
    }
  }
});