/*- ShoppingListItem is a class
- ShoppingListItem has a property named `name`
- ShoppingListItem has a property named `description`
- ShoppingListItem has a property named `is_done`
- ShoppingListItem has a constructor method that accepts 2 arguments, `name` and `description`
  - the constructor method sets the new instances `name` and `description` properties using the arguments passed in
- ShoppingListItem has a method named `check`
  -  calling the instance's `check` method will set it's `is_done` property to true
- ShoppingListItem has a method named `uncheck`
  -  calling the instance's `uncheck` method will set it's `is_done` property to false
- ShoppingListItem has a method named `render`
  -  calling the instance's `render` method will construct and return an html formatted string. the string content will be wrapped in `<li>` tags.  `<li class="completed_[is_done]"><span>[name]</span> <span>[description]</span></li>`.   example: `<li class="completed_false"><span>Avocado</span> <span>Must be eaten immediately.</span></li>`


*/


//jshint esversion: 6

class ShoppingListItem {
  constructor(name, description){
    this.name = name;
    this.description = description;
    this.is_done = false;
  }


  check (){
    this.is_done = true;
  }

  uncheck(){
    this.is_done = false;
  }

  render() {
/*    let str = `<li class="completed_${item.is_done}"><span>${item.name}</span> <span>${item.description}</span>`;

      return str;*/

 /*   var itemStr = `
    <input class="checkbox" type="checkbox" ${this.is_done ? "checked" : ""}>\n
    <span>${this.name}</span>\n
    <span>${this.description}</span>
    `;
    return itemStr;

*/
    var itemStr = `<li class="checkbox" type="checkbox" ${this.is_done ? "checked" : ""}>\n<span>${this.name}</span>\n<span>${this.description}</span></li>`;
    return itemStr;
  }
}
module.exports=ShoppingListItem;

/*
AssertionError: expected
'<li class="checkbox" type="checkbox" >
\n<span>shawarma</span>
\n<span>yummy</span></li>' to equal

'<li class="completed_false">
\n<span>shawarma</span>
\n&nbsp;<span>yummy</span></li>'
    at Context.<anonymous> (js/shopping_list_test.js:53:30)



AssertionError: expected
'<li class="checkbox" type="checkbox" >
\n<span>shawarma</span>
\n<span>yummy</span>
</li>' to equal

'<li class="completed_false">
<span>shawarma</span>
&nbsp;<span>yummy</span><
/li>'
    at Context.<anonymous> (js/shopping_list_test.js:53:30)


<li class="completed_false"><span>shawarma</span>&nbsp;<span>yummy</span></li>
      expect(testItemList.render()).to.equal(`<ul><li class="completed_false"><span>Beer</span>&nbsp;<span>Party</span></li><li class="completed_false"><span>Lays</span><span>Snack</span></li></ul>`);


    expect(milk.render()).to.equal(`<li class="completed_${milk.is_done}"><span>${milk.name}</span> <span>${milk.description}</span>`);



      render() {
    var itemStr = `
    <input class="checkbox" type="checkbox" id="${this.id}" ${this.is_done ? "checked" : ""}>\n
    <span>${this.name}</span>\n
    <span>${this.description}</span>
    `;
    return itemStr;


    //`<li class="completed_${this.is_done}"><input class="checkbox" type="checkbox" id="${this.id}"><span>${this.name}</span> <span>${this.description}</span>`



AssertionError:
expected '\n    <input class="checkbox" type="checkbox" >\n\n    <span>shawarma</span>\n\n    <span>yummy</span>\n    '


to equal '<li class="completed_false"><span>shawarma</span> <span>yummy</span>'
    at Context.<anonymous> (js/shopping_list_test.js:56:30)

*/

