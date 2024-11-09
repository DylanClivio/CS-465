const express = require('express'); // Express app
const router = express.Router();    // Router logic

// This is where we import the controllers we will route
const tripsController = require('../controllers/trips');

// Define route for our trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList) // GET method routes tripsList
    .post(tripsController.tripsAddTrip); // POST method for adding a new trip

// Route for specific trip code
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode) // GET method for finding a trip by code
    .put(tripsController.tripsUpdateTrip); // PUT method for updating a trip

module.exports = router;