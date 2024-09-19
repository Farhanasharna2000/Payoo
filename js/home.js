document.getElementById("btn-add-money")
.addEventListener('click',function(event){
event.preventDefault();
const inputAddMoney = document.getElementById("input-add-money").value;
const addMoneyNumber = parseFloat(inputAddMoney);

const inputPinNumber = document.getElementById("input-pin-number").value;
// console.log(inputAddMoney,inputPinNumber);
console.log(typeof inputPinNumber);

// console.log('click');
if (inputPinNumber === '1234') {
    console.log('added money to the account');
         // current balance:
    const balance = document.getElementById("balance").innerText;
// console.log(balance);
// console.log(typeof balance);

        // convert to number :

        const balanceNumber = parseFloat(balance);
        console.log(typeof addMoneyNumber,typeof balanceNumber);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);
        
       document.getElementById("balance").innerText = newBalance; 


}
else{
    alert('failed to add money!please try again');
    
}


})