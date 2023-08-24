const end_point_method_enum = [
    'POST', 'GET', 'DELETE', 'PUT'
];
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('service_end_points', (tbl) => {
        tbl.primary(['service_end_point_id', 'service_id']);
        tbl.increments('service_end_point_id').unique().notNullable();
        tbl.integer('service_id').notNullable();
        tbl.text('end_point_name').notNullable();
        tbl.enum('end_point_method', end_point_method_enum, {
            useNative: true,
            enumName: 'end_point_method_enum',
        });
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('service_end_points');
};
