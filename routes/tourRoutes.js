const express = require('express');
const tourController = require('./../controllers/tourController');

const router = express.Router();


router.param('id', tourController.checkID);   //param middleware



router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody,tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deteteTour);

module.exports = router;
