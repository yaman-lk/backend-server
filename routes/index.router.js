const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const jwtHelper = require('../config/jwtHelper');

const ctrlBording = require('../controllers/bording.controller');

router.post('/registerUser', ctrlUser.register);
router.post('/authenticateUser', ctrlUser.authenticate);
router.get('/userProfile', jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.get('/postedBordings', jwtHelper.verifyJwtToken, ctrlBording.posted);

router.post('/addNewBording', jwtHelper.verifyJwtToken, ctrlBording.add);
router.get('/allBordings', ctrlBording.all);
router.get('/bordingById/:id', ctrlBording.bordingById);

module.exports = router ;