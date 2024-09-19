document.getElementById("btn-cash-out")
.addEventListener('click',function(event){
event.preventDefault();
const inputCashOut = document.getElementById("input-cash-out").value;
const inputCashOutPinNumber = document.getElementById("input-cash-out-pin-number").value;
// console.log(inputCashOut,inputCashOutPinNumber);
console.log(typeof inputCashOutPinNumber);

// console.log('click');
if (inputCashOutPinNumber === '1234') {
    console.log('deduct money to the account');
         // current balance:
    const balance = document.getElementById("balance").innerText;
// console.log(balance);
// console.log(typeof balance);

        // convert to number :

        const cashOutNumber = parseFloat(inputCashOut);
        const balanceNumber = parseFloat(balance);
        console.log(typeof cashOutNumber,typeof balanceNumber);
        const newBalance =  balanceNumber - cashOutNumber;
        console.log(newBalance);
        
       document.getElementById("balance").innerText = newBalance; 


}
else{
    alert('failed to add money!please try again');
    
}


})