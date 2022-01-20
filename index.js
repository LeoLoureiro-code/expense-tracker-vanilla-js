let Total = 0
let totalIncome = 0
let totalExpenses = 0
const incomeBtn = document.getElementById('income-btn')
const expenseBtn = document.getElementById('expense-btn')
const form = document.getElementById('form')
const description = document.getElementById('description')
const balance = document.getElementById('balance')
const income = document.getElementById('incomeTotal')
const expense = document.getElementById('expenseTotal')
const amount = document.getElementById('amount')


form.addEventListener('submit', function(e){
    e.preventDefault()

})

const validate = (amount, description) =>{
    if(amount === ""){
        alert("There is no amount")
        return false
    }
    if(amount <= 0){
        alert("No negative numbers or zero")
        return false
    }
    if(description ===""){
        alert("There is no description")
        return false
    }
    if(amount === NaN || amount === "e"){
        alert("Just number in amount input")
        return false
    }
    else{
        return true
    }
}

const cleanInputs = (form) =>{
    form.reset()
}

const displayTransaction = (amount) =>{
    let transactions = document.getElementById('transactions')
    let span = document.createElement('span')
    let closeBtn = document.createElement('div')
    let li = document.createElement('li')

    if(amount < 0){
        li.className ="negative"
    }else{
        li.className ="positive"
    }

    closeBtn.className = "delete"
    closeBtn.appendChild(document.createTextNode("X"))

    // remove quantities
    closeBtn.onclick = function(){
     li.remove()  
     if(span.innerText > 0 ){
        balance.innerHTML = "$" + (parseFloat(Total - parseFloat(span.innerText)).toFixed(2))
        income.innerHTML = '$' + (parseFloat(totalIncome - parseFloat(span.innerText)).toFixed(2))
     }if(span.innerText < 0){
        balance.innerHTML = "$" + (parseFloat(totalExpenses - parseFloat(span.innerText)) *-1).toFixed(2)
        expense.innerHTML = "$" + (parseFloat(totalExpenses - parseFloat(span.innerText)) *-1).toFixed(2)
     }
     
    }
    
    span.appendChild(document.createTextNode(amount))
    li.appendChild(document.createTextNode(description.value))
    li.appendChild(span)
    li.appendChild(closeBtn)
    transactions.appendChild(li)
    
}

incomeBtn.addEventListener('click', function(){
    
   

    if(validate(amount.value, description.value)){

        totalIncome =  totalIncome + parseFloat(amount.value) 
        Total = totalIncome - totalExpenses
        displayTransaction(amount.value)
        income.innerHTML = '$' + totalIncome.toFixed(2)
        balance.innerHTML = '$' + Total.toFixed(2)
        cleanInputs(form)
    }


})

expenseBtn.addEventListener('click', function(){

    if(validate(amount.value, description.value)){
        totalExpenses =  totalExpenses + parseFloat(amount.value) 
        Total = totalIncome - totalExpenses
        let negativeAmount = amount.value * -1
        displayTransaction(negativeAmount)
        expense.innerHTML = '$' + totalExpenses.toFixed(2)
        balance.innerHTML = '$' + Total.toFixed(2)
        cleanInputs(form)
    }
})