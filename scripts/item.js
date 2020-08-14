
function validateName(name){
  if(name === ''){
    throw TypeError `Name must not be blank`;
  }
}
// problem is here I think
function create(name){
  return {
    id: cuid(), 
    name: name, 
    checked: false
  }; 
}

export default {
  validateName,
  create,
};
