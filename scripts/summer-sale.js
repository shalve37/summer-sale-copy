// getting the number of an element

function getElementAmount(elementId) {
    const elementField = document.getElementById(elementId);
    const elementString = elementField.innerText;
    const element = parseFloat(elementString);
    element.toFixed(2);
    return element;
}

// setting the new text of an element

function setNewText(elementId, newText) {
    const elementField = document.getElementById(elementId);
    const newTextNumber = parseFloat(newText).toFixed(2);
    elementField.innerText = newTextNumber;
    const elementAmount = parseFloat(elementField);
    elementAmount.toFixed(2);
    return elementAmount;

}

// adding the cards to cart

function listItemEntry(cardName){
    const listField = document.getElementById('selected-card-container')
    const count = listField.childElementCount
    const p = document.createElement('p')
    p.innerHTML = `${count+1}. ${cardName} `;
    p.classList.add('card-list-styles');
    listField.appendChild(p);


}




//  kitchen card 1
document.getElementById('kitchen-card-1').addEventListener('click', function () {
    const cardAmount = getElementAmount('kitchen-price-1');
    const oldTotal = getElementAmount('price-dash');
    const newTotal = cardAmount + oldTotal;
    setNewText('price-dash', newTotal);
    const inputField = document.getElementById('coupon-input');
    const inputButton = document.getElementById('coupon-btn');
    if (newTotal >= 200) {
        inputField.removeAttribute("disabled");
        inputButton.classList.remove('bg-gray-300');
        document.getElementById('banner-btn').addEventListener('click', function(){
            const couponInput = document.getElementById('coupon-input')
            couponInput.value = 'SELL200';
        })
        document.getElementById('coupon-btn').addEventListener('click', function(){
            if(inputField.value === 'SELL200'){
                const payField = document.getElementById('total-dash');
                const discountField = document.getElementById('discount-dash');
                const discountPercentage = 20
                const discountAmount = (discountPercentage / 100) * newTotal;
                const newPay = newTotal - discountAmount;
                const finalPay = newPay.toFixed(2);
                const finalDiscount = discountAmount.toFixed(2);
                discountField.innerText = finalDiscount;
                payField.innerText = finalPay;

            }
        })
        
    }
    else if(newTotal > 0){    
        const purchaseButton = document.getElementById('purchase-btn')
        purchaseButton.removeAttribute("disabled", "disabled")
        purchaseButton.classList.remove('bg-gray-300')
    }
    listItemEntry('Wooden Spatula Set');
})
// kitchen card 2
document.getElementById('kitchen-card-2').addEventListener('click', function () {
    const cardAmount = getElementAmount('kitchen-price-2');
    const oldTotal = getElementAmount('price-dash');
    const newTotal = cardAmount + oldTotal;
    setNewText('price-dash', newTotal);
    const inputField = document.getElementById('coupon-input');
    const inputButton = document.getElementById('coupon-btn');
    if (newTotal >= 200) {
        inputField.removeAttribute("disabled");
        inputButton.classList.remove('bg-gray-300');
        document.getElementById('banner-btn').addEventListener('click', function(){
            const couponInput = document.getElementById('coupon-input')
            couponInput.value = 'SELL200';
        })
        document.getElementById('coupon-btn').addEventListener('click', function(){
            if(inputField.value === 'SELL200'){
                const payField = document.getElementById('total-dash');
                const discountField = document.getElementById('discount-dash');
                const discountPercentage = 20
                const discountAmount = (discountPercentage / 100) * newTotal;
                const newPay = newTotal - discountAmount;
                const finalPay = newPay.toFixed(2);
                const finalDiscount = discountAmount.toFixed(2);
                discountField.innerText = finalDiscount;
                payField.innerText = finalPay;

            }
        })
    }
    else if(newTotal > 0){    
        const purchaseButton = document.getElementById('purchase-btn')
        purchaseButton.removeAttribute("disabled", "disabled")
        purchaseButton.classList.remove('bg-gray-300')
    }
    listItemEntry('K. Accessories');
})
// kitchen card 3
document.getElementById('kitchen-card-3').addEventListener('click', function () {
    const cardAmount = getElementAmount('kitchen-price-3');
    const oldTotal = getElementAmount('price-dash');
    const newTotal = cardAmount + oldTotal;
    setNewText('price-dash', newTotal);
    const inputField = document.getElementById('coupon-input');
    const inputButton = document.getElementById('coupon-btn');
    if (newTotal >= 200) {
        inputField.removeAttribute("disabled");
        inputButton.classList.remove('bg-gray-300');
        document.getElementById('banner-btn').addEventListener('click', function(){
            const couponInput = document.getElementById('coupon-input')
            couponInput.value = 'SELL200';
        })
        document.getElementById('coupon-btn').addEventListener('click', function(){
            if(inputField.value === 'SELL200'){
                const payField = document.getElementById('total-dash');
                const discountField = document.getElementById('discount-dash');
                const discountPercentage = 20
                const discountAmount = (discountPercentage / 100) * newTotal;
                const newPay = newTotal - discountAmount;
                const finalPay = newPay.toFixed(2);
                const finalDiscount = discountAmount.toFixed(2);
                discountField.innerText = finalDiscount;
                payField.innerText = finalPay;

            }
        })
    }
    else if(newTotal > 0){    
        const purchaseButton = document.getElementById('purchase-btn')
        purchaseButton.removeAttribute("disabled", "disabled")
        purchaseButton.classList.remove('bg-gray-300')
    }
    listItemEntry('Home Cookers');
})
// sports card 1
document.getElementById('sports-card-1').addEventListener('click', function () {
    const cardAmount = getElementAmount('sports-price-1');
    const oldTotal = getElementAmount('price-dash');
    const newTotal = cardAmount + oldTotal;
    setNewText('price-dash', newTotal);
    const inputField = document.getElementById('coupon-input');
    const inputButton = document.getElementById('coupon-btn');
    if (newTotal >= 200) {
        inputField.removeAttribute("disabled");
        inputButton.classList.remove('bg-gray-300');
        document.getElementById('banner-btn').addEventListener('click', function(){
            const couponInput = document.getElementById('coupon-input')
            couponInput.value = 'SELL200';
        })
        document.getElementById('coupon-btn').addEventListener('click', function(){
            if(inputField.value === 'SELL200'){
                const payField = document.getElementById('total-dash');
                const discountField = document.getElementById('discount-dash');
                const discountPercentage = 20
                const discountAmount = (discountPercentage / 100) * newTotal;
                const newPay = newTotal - discountAmount;
                const finalPay = newPay.toFixed(2);
                const finalDiscount = discountAmount.toFixed(2);
                discountField.innerText = finalDiscount;
                payField.innerText = finalPay;

            }
        })
    }
    else if(newTotal > 0){    
        const purchaseButton = document.getElementById('purchase-btn')
        purchaseButton.removeAttribute("disabled", "disabled")
        purchaseButton.classList.remove('bg-gray-300')
    }
    listItemEntry('Sports Black Cap');
})
// sports card 2
document.getElementById('sports-card-2').addEventListener('click', function () {
    const cardAmount = getElementAmount('sports-price-2');
    const oldTotal = getElementAmount('price-dash');
    const newTotal = cardAmount + oldTotal;
    setNewText('price-dash', newTotal);
    const inputField = document.getElementById('coupon-input');
    const inputButton = document.getElementById('coupon-btn');
    if (newTotal >= 200) {
        inputField.removeAttribute("disabled");
        inputButton.classList.remove('bg-gray-300');
        document.getElementById('banner-btn').addEventListener('click', function(){
            const couponInput = document.getElementById('coupon-input')
            couponInput.value = 'SELL200';
        })
        document.getElementById('coupon-btn').addEventListener('click', function(){
            if(inputField.value === 'SELL200'){
                const payField = document.getElementById('total-dash');
                const discountField = document.getElementById('discount-dash');
                const discountPercentage = 20
                const discountAmount = (discountPercentage / 100) * newTotal;
                const newPay = newTotal - discountAmount;
                const finalPay = newPay.toFixed(2);
                const finalDiscount = discountAmount.toFixed(2);
                discountField.innerText = finalDiscount;
                payField.innerText = finalPay;

            }
        })
    }
    else if(newTotal > 0){    
        const purchaseButton = document.getElementById('purchase-btn')
        purchaseButton.removeAttribute("disabled", "disabled")
        purchaseButton.classList.remove('bg-gray-300')
    }
    listItemEntry('Full Jersey Set');

})
// sports card 3
document.getElementById('sports-card-3').addEventListener('click', function () {
    const cardAmount = getElementAmount('sports-price-3');
    const oldTotal = getElementAmount('price-dash');
    const newTotal = cardAmount + oldTotal;
    setNewText('price-dash', newTotal);
    const inputField = document.getElementById('coupon-input');
    const inputButton = document.getElementById('coupon-btn');
    if (newTotal >= 200) {
        inputField.removeAttribute("disabled");
        inputButton.classList.remove('bg-gray-300');
        document.getElementById('banner-btn').addEventListener('click', function(){
            const couponInput = document.getElementById('coupon-input')
            couponInput.value = 'SELL200';
        })
        document.getElementById('coupon-btn').addEventListener('click', function(){
            if(inputField.value === 'SELL200'){
                const payField = document.getElementById('total-dash');
                const discountField = document.getElementById('discount-dash');
                const discountPercentage = 20
                const discountAmount = (discountPercentage / 100) * newTotal;
                const newPay = newTotal - discountAmount;
                const finalPay = newPay.toFixed(2);
                const finalDiscount = discountAmount.toFixed(2);
                discountField.innerText = finalDiscount;
                payField.innerText = finalPay;

            }
        })
    }
    else if(newTotal > 0){    
        const purchaseButton = document.getElementById('purchase-btn')
        purchaseButton.removeAttribute("disabled", "disabled")
        purchaseButton.classList.remove('bg-gray-300')
    }
    listItemEntry('Sports Cates');
    
})



// go to home button
function getToDefault(dashId){
    const totalBill = document.getElementById(dashId);
    const defaultBill = 0;
    const firstBill = defaultBill.toFixed(2);
    totalBill.innerText = firstBill;
}
document.getElementById('modal-btn').addEventListener('click', function(){
    getToDefault('price-dash');
    getToDefault('discount-dash');
    getToDefault('total-dash');
    const couponInput = document.getElementById('coupon-input');
    couponInput.value = '';
    const cart = document.getElementById('selected-card-container')
    cart.innerText = '';
})