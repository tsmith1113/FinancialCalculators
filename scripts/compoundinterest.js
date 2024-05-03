"use strict";

//buttons
const calculateButton = document.getElementById("calculateButton");


// input

const depositfield = document.getElementById("depositfield");
const InterestRatefield = document.getElementById("InterestRatefield");
const numberOfYearsfield = document.getElementById("numberOfYearsfield");

// output

const futureValuefield = document.getElementById("futureValuefield");
const  totalValuefield = document.getElementById("totalValuefield");

window.onload = init;

function init(){
    calculateButton.onclick = oncalculateButtonClicked;
}

function oncalculateButtonClicked(){
    ///get the values I know
    let deposit = Number(depositfield.value);
    let Rate = Number(InterestRatefield.value);
    let years = Number(numberOfYearsfield.value);

    // compute the values I don't know
    let future = (deposit * Rate * years);
    let total = (future - deposit);

    futureValuefield.value = future.toFixed(2);
    totalValuefield.value = total.toFixed(2);
}