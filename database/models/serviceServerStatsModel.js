const db = require("../dbConfig");

async function insert(payload) {
    await db('service_server_stats')
        .insert(payload);
}
