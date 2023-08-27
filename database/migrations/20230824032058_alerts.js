const status_enum = [
    'UNRESOLVED', 'RESOLVED'
];

/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.up = function(knex) {
  return knex.schema.createTable('alerts', (tbl) => {
     tbl.primary(['alert_id', 'service_id']);
     tbl.increments('alert_id').unique().notNullable();
     tbl.integer('service_id').notNullable();
     tbl.integer('service_end_point_id');
     tbl.integer('server_stats_id');
     tbl.enum('status', status_enum, {
         useNative: true,
         enumName: 'status_enum',
     });
     tbl.timestamp(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.down = function(knex) {
  return knex.schema.dropTable('alerts');
};
