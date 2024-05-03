"use strict";

// buttons
const calculateButton = document.getElementById("calculateButton");

// input

const loanfield = document.getElementById("loanfield");
const InterestRatefield = document.getElementById("InterestRatefield");
const loanTermfield = document.getElementById("loanTermfield");


//output

const MonthlyPaymentfield = document.getElementById("MonthlyPaymentfield");
const TotalInterestfield = document.getElementById("TotalInterestfield");

window.onload = init;

function init(){
    calculateButton.onclick = oncalculateButtonClicked;
}

function oncalculateButtonClicked(){
    //get the values I know
    let loanAmount = Number(loanfield.value);
    let Rate = Number(InterestRatefield.value) / 1200;
    let loanTerm = Number(loanTermfield.value) * 12;
   
    //compute the values I don't know
    let MonthlyPayment = (loanAmount * Rate * ((1 + Rate) ** loanTerm))/((1 + Rate) **loanTerm-1);
    let TotalInterest = (MonthlyPayment * loanTerm) - loanAmount;

    MonthlyPaymentfield.value = MonthlyPayment.toFixed(2);
    TotalInterestfield.value = TotalInterest.toFixed(2);

}