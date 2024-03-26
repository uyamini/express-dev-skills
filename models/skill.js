let skills = [
    {id: 1, name: 'JavaScript', level: 'Intermediate'},
    {id: 2, name: 'HTML', level: 'Advanced'},
    {id: 3, name: 'CSS', level: 'Advanced'}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create
  };
  
  function getAll() {
    return skills;
  }
  
  function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
  }

  function create(skill) {
    skill.id = Math.floor(Math.random() * 1000) + skills.length; // Simplistic approach to generate a new ID
    skills.push(skill);
  }