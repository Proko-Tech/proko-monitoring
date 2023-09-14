const db = require('../dbConfig');

async function insert(payload) {
    await db('alerts')
        .insert(payload);
}
