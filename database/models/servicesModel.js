const db = require("../dbConfig");

async function insert(payload) {
    await db('services')
        .insert(payload);
}
