const Sequelize = require('sequelize');
const db = require('../config/database');

const Class = db.define('class', {
    title: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    contact_email: {
        type: Sequelize.STRING
    },
})

module.exports = Class;