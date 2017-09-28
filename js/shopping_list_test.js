//jshint esversion: 6

const assert = chai.assert;
const expect = chai.expect;




describe('Shopping List Item', function (){

  let item;
  beforeEach (function () {
  item = new ShoppingListItem('name','description');
   });

  it('Expect Shopping List Item to be a Class',function (){
   expect(ShoppingListItem).to.be.a('function');
  });

  it('Should have a name property', function(){
    expect(item).to.have.property('name');
  });
  it('Should have a description property', function(){
    expect(item).to.have.property('description');
  });
  it('Should have an is_done property', function(){
    expect(item).to.have.property('is_done');
  });

  it('Should be a class constructor', function(){
 //   expect(ShoppingListItem).to.exist;
    item.should.be.an.instanceOf(ShoppingListItem);
  });


});



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