<<<<<<< HEAD
function validate(price) {
    
}
function calcAmount() {

    let price = 1000; 
    let amountNumber = document.querySelector("input[name='amount-input']").value;
    let showAmount = document.querySelector("span.show-amount");

    if ( amountNumber > 10 ) {
        alert("Maximum 10 db terméket vásárolhat");
    } else if ( amountNumber < 1 ) {
        alert("Minimum 1 db terméket szükséges várásolnia!");
    } else {
        showAmount.innerHTML = amountNumber  * price;
    }    
=======
function validate(price) {
    
}
function calcAmount() {

    let price = 1000; 
    let amountNumber = document.querySelector("input[name='amount-input']").value;
    let showAmount = document.querySelector("span.show-amount");

    if ( amountNumber > 10 ) {
        alert("Maximum 10 db terméket vásárolhat");
    } else if ( amountNumber < 1 ) {
        alert("Minimum 1 db terméket szükséges várásolnia!");
    } else {
        showAmount.innerHTML = amountNumber  * price;
    }    
>>>>>>> e096fa33f898bb7f83268085ca3226086a25360d
}