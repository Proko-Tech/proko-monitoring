/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.up = function(knex) {
  return knex.schema.createTable('service_server_stats', (tbl) => {
      tbl.primary(['server_stats_id', 'service_id', 'ip_address']);
      tbl.increments('server_stats_id').unique().notNullable();
      tbl.integer('service_id').notNullable();
      tbl.string('ip_address', 255).notNullable();
      tbl.float('cpu_utilization_percentage');
      tbl.float('ram_utilization_percentage');
      tbl.timestamp(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.down = function(knex) {
  return knex.schema.dropTable('service_server_stats');
};
