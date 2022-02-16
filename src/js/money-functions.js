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

    let numOfQuarters = Math.floor((cents/.25)/100)

    let remainingChange = ((cents/100)-(0.25*numOfQuarters)).toFixed(2);

    let numOfDimes = Math.floor(remainingChange/.10);

    remainingChange = ((cents/100)-(0.25*numOfQuarters)-(0.10*numOfDimes)).toFixed(2);

    let numOfNickels = Math.floor(remainingChange/.05);

    remainingChange = ((cents/100)-(0.25*numOfQuarters)-(0.10*numOfDimes)-(0.05*numOfNickels)).toFixed(2);

    let numOfPennies = Math.floor(remainingChange/.01);


let coins = {
    quarters: numOfQuarters,
    dimes: numOfDimes,
    nickels: numOfNickels,
    pennies: numOfPennies
};

return coins;

};

module.exports = {formatCurrency, getCoins};