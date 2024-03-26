// models/skill.js
let skills = [
    { id: 1, name: 'JavaScript', level: 'Intermediate' },
    { id: 2, name: 'HTML', level: 'Advanced' },
    { id: 3, name: 'CSS', level: 'Advanced' },
    { id: 4, name: 'Express.js', level: 'Beginner' },
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return skills;
  }
  
  function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
  }
  