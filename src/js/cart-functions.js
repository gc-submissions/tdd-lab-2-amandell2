function calculateChange(total, payment){
    let change = Math.round((payment- total)*100)/100;
    return change;
};

function isSufficientPayment(total, payment){
    if(payment >= total){
        return true;
    }else{
        return false;
    }
};

function calculateTotal(itemsArray){
    let total = 0;
    for(let i=0; i<itemsArray.length; i++){
        total += itemsArray[i].price;
    };
    let roundedTotal = Math.round((total)*100)/100;
    return roundedTotal;
};

function addItem(itemsArray, name, price){
    const newItem = {
        name: name,
        price: price
    }
    itemsArray.push(newItem);
};

function removeItem(itemsArray, index){
    itemsArray.splice(index, 1);
};

module.exports = {calculateChange, isSufficientPayment, calculateTotal, addItem, removeItem};