//jshint esversion: 6
//const chai = require('chai');
//chai.should();
const assert = chai.assert;
const expect = chai.expect;


// SHOPPING LIST ITEM

describe('Shopping List Item', function (){
  let item;
  beforeEach (function () {
    item = new ShoppingListItem('shawarma', 'yummy',);
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
/*
  it('Should have a method named render', function() {
    expect(item.render).to.be.a('function');
    expect(item.render()).to.be.a('string');
    expect(item.render()).to.equal(`<li class="completed_${shawarma.is_done}"><span>${shawarma.name}</span> <span>${shawarma.description}</span>`);
*/
  it('has a method named render', function() {
    expect(shawarma.render).to.be.a('function');
    expect(shawarma.render()).to.be.a('string');
    expect(shawarma.render()).to.equal(`<li class="completed_${shawarma.is_done}"><span>${shawarma.name}</span> <span>${shawarma.description}</span>`);
/*  it('has a method named render', function() {
    expect(milk.render).to.be.a('function');
    expect(milk.render()).to.be.a('string');
    expect(milk.render()).to.equal(`<li class="completed_${milk.is_done}"><span>${milk.name}</span> <span>${milk.description}</span>`);*/
    });

//  });
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

  describe('"removeItem"', function (){
    var juice = new ShoppingListItem("OrangeJuice", "quencher");
    var eggs = new ShoppingListItem("Eggs", "chickenPoop");

    it('Should have a method `removeItem`', function (){
      expect(sl.removeItem).to.be.a('function');
    });
    it('Should remove the object passed in from the `items` array', function (){
      sl = new ShoppingList('bread');
      sl.addItem(juice);
      sl.addItem(eggs);
      sl.removeItem(juice);
      expect(sl).to.not.include(juice);
      expect(sl.removeItem()).to.equal(items = items.pop());
//      sl.items.to.not.contain(juice);
    });
  });

/*

  it('has a method removeItem', function() {
    var temp = new ShoppingListItem('milk', 'cows');
    cheese.addItem(temp);
    cheese.removeItem(temp);
    expect(cheese).to.not.include(temp);
    expect(cheese.removeItem()).to.equal(items = items.pop());
    var temp2;
    expect(cheese.removeItem(temp2).to.be.an('error'));
  });*/

});
