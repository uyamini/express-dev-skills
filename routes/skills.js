//routes/skills.js
var express = require('express');
var router = express.Router();
var skillsController = require('../controllers/skills');

/* GET users listing. */
// routes/skills.js
router.get('/new', skillsController.new);

router.post('/', skillsController.create);
router.get('/:id/edit', skillsController.edit);
router.put('/:id', skillsController.update);
router.delete('/:id', skillsController.delete);

router.get('/:id', skillsController.show);
router.get('/', skillsController.index);

// routes/skills.js

router.post('/', skillsController.create);
router.get('/:id/edit', skillsController.edit);
router.put('/:id', skillsController.update);
router.delete('/:id', skillsController.delete);

module.exports = router;
