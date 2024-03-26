const Skill = require('../models/skill');

function index(req, res) {
  res.render('skills/index', {
     skills: Skill.getAll() 
    });
}

function show(req, res) {
  res.render('skills/show', {
     skill: Skill.getOne(req.params.id) 
    });
}

// New function to render the form
function newSkill(req, res) {
    res.render('skills/new');
  }
  
  //Create function to handle form submission
  function create(req, res) {
    Skill.create(req.body);
    res.redirect('/skills');
  }

module.exports = {
  index,
  show,
  new: newSkill,
  create
};