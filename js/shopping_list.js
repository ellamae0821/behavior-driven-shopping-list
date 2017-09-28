class ShoppingListItem {
  constructor(name, description, is_done){
  this.name = name;
  this.description = description;
  this.is_done = is_done;
  }


  check (is_done){
    this.is_done = true;
  }

  uncheck(is_done){
    this.is_done = false;
  }

  render(){
    return '';
  }

}


module.exports=ShoppingListItem;