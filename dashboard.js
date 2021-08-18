document.getElementById('deposit-btn').addEventListener('click',function(){
    // console.log('click');
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    //console.log(depositAmount)

    const depositTotal = document.getElementById('deposit-total');
    const previousAmount = depositTotal.innerText;
    const finalAmount = parseFloat(previousAmount) + parseFloat(depositAmount);
    depositTotal.innerText = finalAmount;
    depositInput.value = '';

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText);
    //console.log(previousBalance);
    const finalBalance = previousBalance + parseFloat(depositAmount);
    balanceTotal.innerText = finalBalance;
})

// withdraw balance 

document.getElementById('withdraw-btn').addEventListener('click',function () {
    const withdrawInput = document.getElementById('withdraw-input');
    
    const withdrawAmount = withdrawInput.value;
    // console.log(withdrawAmount)
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    //const previousWithdraw = parseFloat(withdrawTotalText);
    const finalAmount = parseFloat(withdrawAmount) + parseFloat(withdrawTotalText);
    withdrawTotal.innerText = finalAmount;
    withdrawInput.value = '';
    //console.log(withdrawTotal)
    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText);
    //console.log(previousBalance);
    const finalBalance = previousBalance - parseFloat(withdrawAmount);
    balanceTotal.innerText = finalBalance;
})