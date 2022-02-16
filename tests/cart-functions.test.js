const cartFunction = require('../src/js/cart-functions');

describe("calculateChange", () => {
  test("total 5 & payment 6", ()=>{
    expect(cartFunction.calculateChange(5, 6)).toEqual(1);
  });
  test("total 12.30 & payment 13.03", ()=>{
    expect(cartFunction.calculateChange(12.30, 13.03)).toEqual(0.73);
  });
  test("total 18 & payment 18", ()=>{
    expect(cartFunction.calculateChange(18, 18)).toEqual(0);
  });
});

describe("isSufficientPayment", () => {
  test("total 5 & payment 6", ()=>{
    expect(cartFunction.isSufficientPayment(5, 6)).toEqual(true);
  });
  test("total 10 & payment 7", ()=>{
    expect(cartFunction.isSufficientPayment(10, 7)).toEqual(false);
  });
  test("total 3 & payment 3", ()=>{
    expect(cartFunction.isSufficientPayment(3, 3)).toEqual(true);
  });
  test("total 12.50 & payment 12", ()=>{
    expect(cartFunction.isSufficientPayment(12.50, 12)).toEqual(false);
  });
});

describe("calculateTotal", () => {
  test("itemsArray with one price 4.99 it returns 4.99", ()=>{
    //arrange
      const oneItem = [{name: "Jelly", price: 4.99}];
    //act
      const totalPrice = cartFunction.calculateTotal(oneItem);
    //assert
    expect(totalPrice).toEqual(4.99);
  });

  test("itemsArray with prices 3.50, 12.99, and 0.03, it returns 16.52", ()=>{
    //arrange
      const threeItems = [{name: "Something", price: 3.50}, {name: "Something", price: 12.99}, {name: "Something", price: 0.03}];
    //act
      const totalPrice = cartFunction.calculateTotal(threeItems);
    //assert
    expect(totalPrice).toEqual(16.52);
  });

  test("empty itemsArray, it returns 0", ()=>{
    //arrange
      const noItems = [];
    //act
      const totalPrice = cartFunction.calculateTotal(noItems);
    //assert
    expect(totalPrice).toEqual(0);
  });

  test("itemsArray with prices 12, 2.56, 8.96, 12.40 returns 35.92", ()=>{
    //arrange
    const fourItems = [{name: "Something", price: 12}, {name: "Something", price: 2.56}, {name: "Something", price: 8.96}, {name: "Something", price: 12.40}];
    //act
      const totalPrice = cartFunction.calculateTotal(fourItems);
    //assert
    expect(totalPrice).toEqual(35.92);
  });
});

describe("addItem", () => {
  test("empty itemsArray", ()=>{
    //arrange
    const newItem ={
      name: "Beans",
      price: 3
    };
    const itemsArray= [];
    //act
    cartFunction.addItem(itemsArray, newItem.name, newItem.price);
    //assert
    expect(itemsArray).toEqual([newItem]);
  });

  test("itemsArray with one item", ()=>{
    const newItem ={
      name: "Sugar",
      price: 2,
    };
    const itemsArray= [{
      name: "Beans",
      price: 3
    }];
    
    cartFunction.addItem(itemsArray, newItem.name, newItem.price);

    expect(itemsArray).toEqual([itemsArray[0], newItem]);

  });

  test("itemsArray with three items", ()=>{
    const newItem ={
      name: "Bread",
      price: 4
    };
    const itemsArray= [{
      name: "Beans",
      price: 3
      },
    {
      name: "Sugar",
      price: 2,
      },
    {
      name: "Apple",
      price: 1,
      },
    ];
    
    cartFunction.addItem(itemsArray, newItem.name, newItem.price);

    expect(itemsArray).toEqual([itemsArray[0], itemsArray[1], itemsArray[2], newItem]);

  });
});

describe("removeItem", () => {
  test("removes first element in array of 3 items",()=>{
    //arrange
    const itemOne = {
      name: "Beans",
      price: 3
    };
    const itemTwo = {
      name: "Sugar",
      price: 2,
    };
    const itemThree = {
      name: "Apple",
      price: 1,
    };
    const itemsArray= [itemOne, itemTwo, itemThree];
    //act
    cartFunction.removeItem(itemsArray, 0);
    //assert
    expect(itemsArray).toEqual([itemTwo, itemThree]);
  });

  test("removes last element in array of 3 items",()=>{
    //arrange
    const itemOne = {
      name: "Beans",
      price: 3
    };
    const itemTwo = {
      name: "Sugar",
      price: 2,
    };
    const itemThree = {
      name: "Apple",
      price: 1,
    };
    const itemsArray= [itemOne, itemTwo, itemThree];
    //act
    cartFunction.removeItem(itemsArray, 2);
    //assert
    expect(itemsArray).toEqual([itemOne, itemTwo]);
  });

  test("removes middle element in array of 3 items",()=>{
    //arrange
    const itemOne = {
      name: "Beans",
      price: 3
    };
    const itemTwo = {
      name: "Sugar",
      price: 2,
    };
    const itemThree = {
      name: "Apple",
      price: 1,
    };
    const itemsArray= [itemOne, itemTwo, itemThree];
    //act
    cartFunction.removeItem(itemsArray, 1);
    //assert
    expect(itemsArray).toEqual([itemOne, itemThree]);
  });

  test("only item in array of 1",()=>{
    //arrange
    const itemOne = {
      name: "Beans",
      price: 3
    };
    const itemsArray= [itemOne];
    //act
    cartFunction.removeItem(itemsArray, 0);
    //assert
    expect(itemsArray).toEqual([]);
  });

});