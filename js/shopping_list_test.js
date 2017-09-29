//jshint esversion: 6
//const chai = require('chai');
//chai.should();
const assert = chai.assert;
const expect = chai.expect;


// SHOPPING LIST ITEM

describe('Shopping List Item', function (){
  let item;
  beforeEach (function () {
    item = new ShoppingListItem('shawarma', 'yummy');
  });
//PROPERTY
  it('Expect Shopping List Item should be a Class', function (){
    expect(ShoppingListItem).to.be.a('function');
//    ShoppingListItem.should.be.a.function;
  });

  it('Should have a Name property', function (){
    expect(item).to.have.property('name');
  });

  it('Should have a Description property', function (){
    expect(item).to.have.property('description');
  });
//CONSTRUCTOR

  it('Should accept 2 arguments: name and description', function (){
    expect(item.name).to.equal('shawarma');
    expect(item.description).to.equal('yummy');
  });


  it('Should have a method named `check`', function() {
    expect(item.check).to.be.a('function');
    item.check();
    expect(item.is_done).to.equal(true);
  });

  it('Should have a method named `uncheck`', function() {
    expect(item.uncheck).to.be.a('function');
    item.uncheck();
    expect(item.is_done).to.equal(false);
  });

  it('has a method named render', function() {
    expect(item.render).to.be.a('function');
    expect(item.render()).to.be.a('string');
/*    expect(item.render()).to.equal(`<li class="completed_${item.is_done}"><span>${item.name}</span> <span>${item.description}</span>`);
*/
    expect(item.render()).to.equal(`<li class="completed_${item.is_done}"><span>${item.name}</span> <span>${item.description}</span>`);
    });

});


//SHOPPING LIST

describe('Shopping List', function (){
  let sl;
  let milk = new ShoppingListItem('bluecap', 'redcap');
  beforeEach (function () {

    sl = new ShoppingList('bread');
  });

  it('Should be a class', function (){
    expect(ShoppingList).to.be.a('function');
  });

  it('Should have a property named `items`', function (){
    expect(sl).to.have.property('items');
  });

  it('Should have a constructor method that initialize items as an empty array', function (){
    expect(sl.items).to.be.a('array');
  });

  it('Should have a method `addItem`', function (){
    let newSLI = new ShoppingListItem('shawarma', 'yummy');
    expect(sl.addItem).to.have.lengthOf(1);
    sl.addItem(newSLI);
    expect(sl.items.length).to.equal(1);
    expect(sl.items[0]).to.be.an.instanceof(ShoppingListItem);
  });

  var juice = new ShoppingListItem("OrangeJuice", "quencher");
  var eggs = new ShoppingListItem("Eggs", "chickenPoop");

  it('Should have a method `removeItem`', function (){
    expect(sl.removeItem).to.be.a('function');
  });

  it('Should remove the object passed in from the `items` array', function (){
    sl.addItem(juice);
    sl.addItem(eggs);
    sl.removeItem(juice);
    expect(sl).to.not.include(juice);
    expect(sl.removeItem()).to.equal(sl.items = sl.items.pop());
  });

  it('Should have a method named "render"', function () {
      expect(sl).to.have.property('render');
      expect(sl.render).to.be.a('function');
    });

  it('Should concatenate the string from calling the render and returns it as a string', function (){
    sl.addItem(juice);
    sl.addItem(eggs);

    /*expect(sl.render()).to.equal(`<ul><li class="completed_false"><span>OrangeJuice</span>&nbsp;<span>quencher</span></li><li class="completed_false"><span>Eggs</span><span>chickenPoop</span></li></ul>`);*/

    expect(sl.render()).to.equal(`<li class="completed_${sl.finished}"><span>${sl.name}</span><span>${sl.description}</span></li>`);

  });


   /* it('should have a method render, should be a string', function(){
      var jerky = new ShoppingListItem("jerky","delicious");
          expect(jerky.render).to.be.a("function");
    expect(jerky.render()).to.be.a("string");
    expect(jerky.render()).to.equal(`<li class="completed_${jerky.finished}"><span>${jerky.name}</span><span>${jerky.description}</span></li>`);
*/
});
