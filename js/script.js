function getinputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputValue = parseFloat(input.value);
    return inputValue;
}



function totalExpensesCalculation() {
    const foodCost = getinputValue('food');
    const rentCost = getinputValue('rent');
    const clothesCost = getinputValue('clothe');
    const totalExpense = document.getElementById('total-expense');
    if (foodCost < 0 || isNaN(foodCost)) {
        errorHandle('food', true);
    }
    else if (rentCost < 0 || isNaN(rentCost)) {
        errorHandle('food');
        errorHandle('rent', true);

    }
    else if (clothesCost < 0 || isNaN(clothesCost)) {
        errorHandle('rent');
        errorHandle('clothe', true);

    }
    else {
        totalExpense.innerText = foodCost + rentCost + clothesCost;
        errorHandle('food');
        errorHandle('rent');
        errorHandle('clothe');
    }
}

function balanceCalculation() {
    const income = getinputValue('income')
    const totalExpenseIntext = document.getElementById('total-expense');
    const totalExpense = parseFloat(totalExpenseIntext.innerText);
    const balance = document.getElementById('balance');
    if (income < 0 || isNaN(income)) {
        errorHandle2('income');
        errorHandle('income', true);
        totalExpenseIntext.innerText = '!!!';
        balance.innerText = '!!!';
    }
    else if (income < totalExpense) {
        errorHandle('income');
        errorHandle2('income', true);
        balance.innerText = '!!!';
        totalExpenseIntext.innerText = '!!!';

    }
    else {
        balance.innerText = income - totalExpense;
        errorHandle('income');
        errorHandle2('income');
    }
}

function savingAmmountCalculation() {
    const savingPercentage = getinputValue('save');
    const income = getinputValue('income');

    const sevingAmount = document.getElementById('saving');

    if (savingPercentage < 0 || isNaN(savingPercentage)) {
        errorHandle('save', true);
        sevingAmount.innerText = '!!!';
    }
    else {
        sevingAmount.innerText = income * savingPercentage / 100;
    }
}

function remainingBalance() {
    const balanceText = document.getElementById('balance');
    const balance = parseFloat(balanceText.innerText);

    const savingAmountText = document.getElementById('saving');
    const savingAmount = parseFloat(savingAmountText.innerText);

    const remainingBalance = document.getElementById('remaining-balance');

    if (balance < savingAmount) {
        errorHandle('save');
        savingAmountText.innerText = '!!!';
        errorHandle2('save', true);

    }
    else if (isNaN(savingAmount)) {
        errorHandle2('save');
        errorHandle('save', true);
    }
    else {
        remainingBalance.innerText = balance - savingAmount;
        errorHandle2('save');
        errorHandle('save');
    }
}

function errorHandle(idToCheck, gotError) {
    if (gotError) {
        document.getElementById(idToCheck).style.border = '2px solid red';
        document.getElementById(idToCheck).style.backgroundColor = '#ffb2b2';
        document.getElementById(idToCheck + '-error-messege').style.display = 'block';
    }
    else {
        document.getElementById(idToCheck).style.border = 'none';
        document.getElementById(idToCheck).style.backgroundColor = 'white';
        document.getElementById(idToCheck + '-error-messege').style.display = 'none';
    }
}

function errorHandle2(idToCheck, gotError) {
    if (gotError) {
        document.getElementById(idToCheck).style.border = '2px solid red';
        document.getElementById(idToCheck).style.backgroundColor = '#ffb2b2';
        document.getElementById(idToCheck + '2-error-messege').style.display = 'block';
    }
    else {
        document.getElementById(idToCheck).style.border = 'none';
        document.getElementById(idToCheck).style.backgroundColor = 'white';
        document.getElementById(idToCheck + '2-error-messege').style.display = 'none';
    }
}


document.getElementById('calculate').addEventListener('click', function () {
    totalExpensesCalculation();
    balanceCalculation();
})
document.getElementById('saving-btn').addEventListener('click', function () {
    savingAmmountCalculation();
    remainingBalance();
})