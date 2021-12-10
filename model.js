const db = require('./db-config');

const findAll = () => {
    return db('profiles')
}

module.exports = {
    findAll
}