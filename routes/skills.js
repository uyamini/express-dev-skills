var express = require('express');
var router = express.Router();
var skillsController = require('../controllers/skills');

/* GET users listing. */
// routes/skills.js

router.get('/', skillsController.index);
router.get('/:id', skillsController.show);
router.get('/new', skillsController.new); //Route for displaying the form
router.post('/', skillsController.create); //Route for submitting the form

module.exports = router;
