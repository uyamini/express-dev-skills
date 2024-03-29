const Skill = require('../models/skill');

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  edit,
  update
};

function create(req, res) {
  Skill.create(req.body); // Add the skill to your "database"
  res.redirect('/skills'); // Redirect back to the list of skills
}

function newSkill(req, res) {
  res.render('skills/new');
}

function index(req, res) {
  res.render('skills/index', {
     skills: Skill.getAll() 
    });
}

function show(req, res) {
  console.log(req.params.id); // Log the ID to debug
  res.render('skills/show', {
     skill: Skill.getOne(req.params.id) 
  });
}


function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
}

function edit(req, res) {
  const skill = Skill.getOne(req.params.id);
  res.render('skills/edit', {skill});
}

function update(req, res) {
  Skill.updateOne(req.params.id, req.body);
  res.redirect(`/skills/${req.params.id}`);
}