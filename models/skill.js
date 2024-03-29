// models/skill.js
let skills = [
    { id: 1, name: 'JavaScript', level: 'Intermediate' },
    { id: 2, name: 'HTML', level: 'Advanced' },
    { id: 3, name: 'CSS', level: 'Advanced' },
    { id: 4, name: 'Express.js', level: 'Beginner' },
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    updateOne
  };

  function updateOne(id, skillToUpdate) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    if (idx >= 0) Object.assign(skills[idx], skillToUpdate);
  }
  
  function create(skill) {
    if (!skill) skill = {};
    skill.id = Date.now() % 1000000;
    skills.push(skill);
  }
  

  function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    if (idx >= 0) skills.splice(idx, 1);
  }

  function getAll() {
    return skills;
  }
  
  function getOne(id) {
    if (!id || isNaN(Number(id))) {
      throw new Error(`Invalid ID: ${id}`);
    }
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    if (!skill) {
      throw new Error(`Skill with ID ${id} not found.`);
    }
    return skill;
  }
  
  