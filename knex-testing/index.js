const knex = require('knex');

const config = {
    client: 'sqlite3',
    connection: {
        filename: './users.db3'
    },
    useNullAsDefault: true
};

const db = knex(config);

function find() {
    return db('users');
}

function findById(id) {
    return db('users').where({ id })
}

async function execute() {
    await remove(6);
}

function add(user) {
    return db('users').insert(user);
}

function update(id, changes) {
    return db('users').where({ id }).update(changes);
}

function remove(id) {
    return db('users').where({ id }).delete();
}

execute();