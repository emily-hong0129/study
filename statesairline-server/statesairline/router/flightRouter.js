const { findAll, findById, update } = require('../controller/flightController');
const exress = require('express');
const router = exress.Router();

router.get('/', findAll); // GET /flight

router.get('/:id', findById); // Get /flight?departure_times=2021-12-02T12:00:00&arrival_times=2021-12-03T12:00:00

router.put('/:id', update); // PIT /flight?departure_times=2021-12-02T12:00:00&arrival_times=2021-12-03T12:00:00

module.exports = router;
