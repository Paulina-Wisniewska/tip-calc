const billInput = document.querySelector(".bills-input");
const nopInput = document.querySelector(".NOP-input");
const totalAmount = document.querySelector(".total");
const tipAmount = document.querySelector(".tip-amount");
const reset = document.querySelector(".reset");


let bill = 0;
let tip = 0.05;
let numberOfPeople = 1;

nopInput.value = numberOfPeople;

const calculateAmounts = () => {
  const tipPrice = bill * tip;
  const tipPricePerPerson = tipPrice / numberOfPeople;
  const total = bill + tipPrice;
  const totalPerPerson = total / numberOfPeople;
  tipAmount.innerHTML = `$${tipPricePerPerson.toFixed(2)}`;
  totalAmount.innerHTML = `$${totalPerPerson.toFixed(2)}`;
}

const changeBill = (event) => {
  bill = Number(event.target.value);
  calculateAmounts();
};

const changeNop = (event) => {
  numberOfPeople = Number(event.target.value);
  calculateAmounts();
};

const changeTip = (number) => {
  tip = number;
  calculateAmounts();
};

const resetValues = () => {
    bill = 0;
    tip = 0.05;
    numberOfPeople = 1;
    calculateAmounts();
    billInput.value = bill;
    nopInput.value = numberOfPeople;
}

reset.addEventListener("click", resetValues);
billInput.addEventListener("change", changeBill);
nopInput.addEventListener("change", changeNop);
