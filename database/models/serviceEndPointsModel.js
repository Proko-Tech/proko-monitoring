const db = require("../dbConfig");

async function insert(payload) {
    await db('service_end_points')
        .insert(payload);
}
