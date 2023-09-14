/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.up = function(knex) {
  return knex.schema.createTable('service_end_point_stats', (tbl) => {
      tbl.primary(
          ['service_end_point_stats_id', 'service_id', 'service_end_point_id'])
      tbl.increments('service_end_point_stats_id').unique().notNullable();
      tbl.integer('service_id').notNullable();
      tbl.integer('service_end_point_id').notNullable();
      tbl.timestamp('request_start_time').notNullable();
      tbl.timestamp('request_end_time');
      tbl.integer('elapsed_time_secs');
      tbl.integer('response_status_code');
      tbl.json('response_stats');
      tbl.json('request_stats');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.down = function(knex) {
  return knex.schema.dropTable('service_end_point_stats');
};
