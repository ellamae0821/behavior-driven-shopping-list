
/*var ShoppingList = function() {
  this.items = [];

  this.addItem = function( item ){
    if( item instanceof ShoppingListItem ){
      this.items.push(item);
    } else {
      throw new Error('Error');
    }
  };
*/

//jshint esversion: 6
class ShoppingList {
  constructor (items){
    this.items= [];
  }

  addItem (item){
    if(item instanceof ShoppingListItem){
      this.items.push(item);
      }else{
        throw new Error('Error');
      }
    }

  removeItem( item ){
    if( item === undefined ) {
      if( this.items.length > 0 ){
        this.items.pop();
      }
    } else if ( /*item instanceof ShoppingListItem === false || */this.items.indexOf(item) === -1){
      throw new Error('Error');
    } else if ( this.items.indexOf( item ) !== -1 /*&& item instanceof ShoppingListItem */){
      this.items.splice(this.items.indexOf(item), 1);
    }
  }

  render() {
    var itemStr = `
    <input class="checkbox" type="checkbox" id="${this.id}" ${this.is_done ? "checked" : ""}>\n
    <span>${this.name}</span>\n
    <span>${this.description}</span>
    `;
    return itemStr;
  }
}
//shoud remove the last item
//if no objects, do nothing
//instance of




module.exports=ShoppingList;
