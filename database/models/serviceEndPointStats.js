const db = require("../dbConfig");

async function insert(payload) {
    await db('service_end_point_stats')
        .insert(payload);
}
