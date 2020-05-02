// Your code goes in here


document.querySelector(".header").innerText = "Tip Calculator";

const billElement = document.querySelector("#bill");
const serviceRateElement = document.querySelector("#service-rate");
const personsElement = document.querySelector("#persons");
const form = document.querySelector(".form");

form.addEventListener("submit", function(e){
    let billValue = parseInt(billElement.value);
    let serviceValue = parseFloat(serviceRateElement.value);
    let personsValue = parseInt(personsElement.value);
   
    let result = billValue * serviceValue + billValue;
    // let tipContent = `<h4>TIP AMOUNT</h4>
    //     <p>$${result}</p>`;
    let tipContent = "";
    if (personsValue > 1) {
        tipContent += `<h4>TIP AMOUNT</h4>
        <p>$${result/personsValue} each</p>`;
    }else{
        tipContent += `<h4>TIP AMOUNT</h4>
        <p>$${result}</p>`;
    }
    document.querySelector('#tip').innerHTML = tipContent;
    e.preventDefault();
})


