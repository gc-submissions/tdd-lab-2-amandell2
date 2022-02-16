const moneyFunction = require('../src/js/money-functions');

describe("formatCurrency", () => {
  test("0 return $0.00", ()=>{
    expect(moneyFunction.formatCurrency(0)).toEqual("$0.00");
  });

  test("1 return $1.00", ()=>{
    expect(moneyFunction.formatCurrency(1)).toEqual("$1.00");
  });

  test("1.5 return $1.50", ()=>{
    expect(moneyFunction.formatCurrency(1.5)).toEqual("$1.50");
  });

  test("0.01 return $0.01", ()=>{
    expect(moneyFunction.formatCurrency(0.01)).toEqual("$0.01");
  });

  test("527.6789 returns $527.68", ()=>{
    expect(moneyFunction.formatCurrency(527.6789)).toEqual("$527.68");
  });

  test("-1 returns -$1.00", ()=>{
    expect(moneyFunction.formatCurrency(-1)).toEqual("-$1.00");
  });

  test("negative decimal", ()=>{
    expect(moneyFunction.formatCurrency(-0.80)).toEqual("-$0.80");
  });

  test("no number in the ones place in decimal", ()=>{
    expect(moneyFunction.formatCurrency(.25)).toEqual("$0.25");
  });
});

describe("getCoins", () => {
  test("32 cents",()=>{
    expect(moneyFunction.getCoins(0.32)).toEqual({quarters: 1, dimes: 0, nickels: 1, pennies: 2});
  });

  test("10 cents",()=>{
    expect(moneyFunction.getCoins(0.10)).toEqual({quarters: 0, dimes: 1, nickels: 0, pennies: 0});
  });

  test("27 cents",()=>{
    expect(moneyFunction.getCoins(0.27)).toEqual({quarters: 1, dimes: 0, nickels: 0, pennies: 2});
  });

  test("68 cents",()=>{
    expect(moneyFunction.getCoins(0.68)).toEqual({quarters: 2, dimes: 1, nickels: 1, pennies: 3});
  });

  test("larger than $1",()=>{
    expect(moneyFunction.getCoins(1.05)).toEqual({quarters: 4, dimes: 0, nickels: 1, pennies: 0});
  });
});