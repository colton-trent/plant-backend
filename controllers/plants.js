const Plant = require('../models/plant');

async function index (req, res) {
    try {
        const plants = await Plant.find({});
        res.status(200).json(plants);
    } catch (error) {
        console.log(error);
        res.status(400).json({
            error: `something went wrong`})
    }
};

async function create(req, res) {
    try {
        const plant = await Plant.create(req.body);
        res.status(201).json(plant);
    } catch (error) {
        console.log(error);
        res.status(401).json({
            error: 'something went wrong'});
    }
};

module.exports = {
    index,
    create,
};