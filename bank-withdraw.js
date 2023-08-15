// step-1: add withdraw button handler with addEventListener
document.getElementById('btn-withdraw').addEventListener('click', function(){

    // step-2: get the withdraw amount from the withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    // make sure to convert the input string to number by using parseFloat
    const newWithdrawAmount = parseFloat(withdrawAmountString);

        // step-7: clear the withdraw input field
        withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid number')
        return;
    }

     // step-3: get the current total withdraw from html withdraw h2 id
    // h2 is not input. so i have to use .innerText to get the text
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    // make sure to convert the input string to number by using parseFloat
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);



    // step-5: get the previous balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if(newWithdrawAmount > previousBalanceTotal){
        alert("Maximum amount. Your father's don't have enough money");
        return;
    }
        // step-4:set the total withdraw 
        const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
        withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-6: calculate new total balance
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;


})