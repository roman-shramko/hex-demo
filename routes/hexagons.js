const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const Hexagon = require('../models/hexagon');

router.get('/:id', (req, res, next) => {
    res.send('YOU FACE HEXAGON ' + req.params.id);
});

router.post('/', (req, res, next) => {
    let newHexagon = new Hexagon({
        color: "#" + Math.floor(Math.random()*0xFFFFFF).toString(16),
        x: req.body.x,
        y: req.body.y
    });
    Hexagon.addHexagon(newHexagon, (err, hexagon) => {
        if (err) {
            res.json({success: false, msg: "Failed to add hexagon :(" + err});
        }
        else {
            res.json({success: true, msg: "Hexagon added"});
        }
    })
});

module.exports = router;
