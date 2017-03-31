const mongoose = require('mongoose');
const config = require('../config/database');

const HexagonSchema = mongoose.Schema({
    color: {
        type: String,
        required: true
    },
    x: {
        type: Number,
        required: true
    },
    y: {
        type: Number,
        required: true
    }
});

const Hexagon = module.exports = mongoose.model('Hexagon', HexagonSchema);

module.exports.getHexagonById = function (id, callback) {
    Hexagon.findById(id, callback);
};

module.exports.addHexagon = function (newHexagon, callback) {
    newHexagon.save(callback);
};