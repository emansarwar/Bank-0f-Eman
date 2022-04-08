// function doubleIt(num){
//     const result = mum*2;
//     return result;

// }
// const first = doubleIt(5);
// const second = doubleIt(7);
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmountValue = parseFloat(inputAmountText);
    // clear the deposit input 
    inputField.value = '';

    return inputAmountValue;
}

function updateTotalField(totalFieldId,amount){
    const totalElement = document.getElementById(totalFieldId);
    const previousTotalText = totalElement.innerText;
    const previousTotal = parseFloat(previousTotalText);
    totalElement.innerText = previousTotal + amount;
}

function updateBalance(newAmount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    
    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + parseFloat(newAmount);

    }
    else{
        balanceTotal.innerText = previousBalanceTotal - parseFloat(newAmount);
    }
    
}

 

// handle deposit button
document.getElementById('deposit-button').addEventListener('click', function(){
    // get the amount deposited
    // const depositInput = document.getElementById('deposit-input');
    // const newDepositAmountText = depositInput.value;
    

    
    // get and update deposit total
    // const depositTotal = document.getElementById('deposit-total');
    // const previosDepositAmountText = depositTotal.innerText;
    // const previosDepositAmount = parseFloat(previosDepositAmountText);
    // depositTotal.innerText = previosDepositAmount + newDepositAmount;
    // depositTotal.innerText =newDepositTotal;
    
    //update Balance
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // const newBalanceTotal = previousBalanceTotal + parseFloat(newDepositAmount);
    // balanceTotal.innerText = newBalanceTotal;
    const newDepositAmount = getInputValue('deposit-input');
    updateTotalField('deposit-total',newDepositAmount);
    updateBalance(newDepositAmount, true);
})

//handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function(){
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const newWithdrawAmount = parseFloat(withdrawAmountText);
    
     // get and update withdraw total
    //  const withdrawTotal = document.getElementById('withdraw-total');
    //  const previousWithdrawText = withdrawTotal.innerText;
    //  const previousWithdrawTotal = parseFloat(previousWithdrawText);
    // withdrawTotal.innerText = previousWithdrawTotal + newWithdrawAmount;

    
     
     
     //update balance after withdraw
    //  const balanceTotal = document.getElementById('balance-total');
    //  const previousBalanceText = balanceTotal.innerText;
    //  const previousBalanceTotal = parseFloat(previousBalanceText);
    //  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    //  balanceTotal.innerText = newBalanceTotal;
    const newWithdrawAmount = getInputValue('withdraw-input');
    updateTotalField('withdraw-total', newWithdrawAmount)
    updateBalance(newWithdrawAmount, false);
     
})