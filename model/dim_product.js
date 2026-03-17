cube(`dim_product`, {
  sql: `SELECT * FROM olelifetech.gold_zone.dim_product`,

  dimensions: {
    product_sk: {
      sql: `product_sk`,
      type: `number`,
      primaryKey: true
    },
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