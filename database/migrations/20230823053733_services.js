const health_status_enum = [
    'HEALTHY', 'WARNING', 'CRITICAL',
];
/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.up = function(knex) {
  return knex.schema.createTable('services', (tbl) => {
    tbl.primary(['service_id', 'service_name']);
    tbl.increments('service_id').unique().notNullable();
    tbl.string('service_name', 255).unique().notNullable();
    tbl.timestamp(true, true);
    tbl.enum('health_status', health_status_enum, {
      useNative: true,
      enumName: 'health_status_enum',
    })
    tbl.json('cpu_setting_stats').notNullable();
    tbl.json('ram_setting_stats').notNullable();
    tbl.json('request_time_setting_stats').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.down = function(knex) {
  return knex.schema.dropTable('services');
};
