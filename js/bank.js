document.getElementById('btn-deposit').addEventListener('click', function () {
    const userDepositElement = document.getElementById('user-deposit');
    const userDeposit = userDepositElement.value;
if(userDeposit==''){
   return alert('opps!')
}

    const previousDepositElement = document.getElementById('depositBox');
    const previousDeposit = previousDepositElement.innerText;
    const previousDepositAmmount = parseFloat(previousDeposit)
    
    const userDepositAmmount = parseFloat(userDeposit);
    userDepositElement.value = ''
    if (userDepositAmmount < 0) {
        alert('opps')
        return
    }
    
    previousDepositElement.innerText = previousDepositAmmount + userDepositAmmount;
    userDepositElement.value = ''
    const previousBalanceElement = document.getElementById('my-balance');
    const previousBalance = previousBalanceElement.innerText;
    const previousBalanceAmmount = parseFloat(previousBalance);
    previousBalanceElement.innerText = previousBalanceAmmount + userDepositAmmount;
})
// Withdraw;


document.getElementById('btn-withdraw').addEventListener('click', function () {

    const previousWithdrawElement = document.getElementById('withdraw-box');

    const userWithdrawElement = document.getElementById('user-withdraw');
    const useruserWithdraw = userWithdrawElement.value;
if(useruserWithdraw==0){
    return alert('shit!!')
}

    const previousWithdraw = previousWithdrawElement.innerText;
    const previousWithdrawAmmount = parseFloat(previousWithdraw)

  
    const useruserWithdrawAmmount = parseFloat(useruserWithdraw);

    userWithdrawElement.value = ''

    const previousBalanceElement = document.getElementById('my-balance');
    const previousBalance = previousBalanceElement.innerText;
    const previousBalanceAmmount = parseFloat(previousBalance);

    if(previousBalanceAmmount < useruserWithdrawAmmount ||useruserWithdrawAmmount < 0 || userWithdrawElement === '' ){
        alert('Ammount Not Currect')
        return
      }
      previousWithdrawElement.innerText = previousWithdrawAmmount + useruserWithdrawAmmount;

    previousBalanceElement.innerText = previousBalanceAmmount - useruserWithdrawAmmount;

})