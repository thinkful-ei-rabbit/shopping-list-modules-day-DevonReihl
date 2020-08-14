import item from './item.js';

let items = [];
let hideCheckedItems= false;

function findById (id){
  // this.items.find(id);
  return items.findIndex(item => item.id === id);
}

function addItem(name){
  try {
    item.validateName(name);
    let newItem =item.create(name);
    this.items.push(newItem);
  } catch (error) {
    console.log(`Cannot add item: ${error.message}`);
  }
}

function findAndToggleChecked(id) {
  let target=this.items[findById(id)];
  target.checked = !target.checked;
  
}

function findAndUpdateName(id, newName) {
  try {
    item.validateName(newName);
    this.items[findById(id)].name=newName;

  } catch (error) {
    console.log(`Cannot add name: ${error.message}`); 
  }
}

function findAndDelete (id){
  this.items.splice(findById(id), 1);  
}


export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndDelete,
  findAndUpdateName

};
