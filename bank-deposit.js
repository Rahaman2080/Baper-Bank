//step-1: add deposit button handler with addEventListener
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2: get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const depositAmountString = depositField.value;
    // make sure to convert the input string to number by using parseFloat
    const newDepositAmount = parseFloat(depositAmountString);

        // step-7: clear the deposit field
        depositField.value = '';

        if(isNaN(newDepositAmount)){
            alert('Please, Provide a valid number')
            return;
        }

    // step-3: get the current total deposit from html deposit h2 id
    // h2 is not input. so i have to use .innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    // make sure to convert the input string to number by using parseFloat
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-4: set the total deposit 
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;

    // step-5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

    balanceTotalElement.innerText = currentBalanceTotal;


})