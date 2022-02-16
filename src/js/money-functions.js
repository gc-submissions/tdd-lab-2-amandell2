function formatCurrency(amount){
   let money = amount.toFixed(2);
   if(money>=0){
       return "$"+money;
   }else if(money<0){
       let positiveMoney = Math.abs(money);
       return "-$"+ positiveMoney.toFixed(2);
   }
};

function getCoins(cents){

let numOfQuarters = Math.floor((cents*100)/25); 

let remainingChange = (cents-(0.25*numOfQuarters)).toFixed(2);

let numOfDimes = Math.floor((remainingChange*100)/10);

remainingChange = (cents-(0.25*numOfQuarters)-(0.10*numOfDimes)).toFixed(2);

let numOfNickels = Math.floor((remainingChange*100)/5);

remainingChange = (cents-(0.25*numOfQuarters)-(0.10*numOfDimes)-(0.05*numOfNickels)).toFixed(2);

let numOfPennies = Math.floor((remainingChange*100)/1);

let coins = {
    quarters: numOfQuarters,
    dimes: numOfDimes,
    nickels: numOfNickels,
    pennies: numOfPennies
};

return coins;

};

module.exports = {formatCurrency, getCoins};