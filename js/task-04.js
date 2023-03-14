let counterValue = 0;
const counterEl = document.getElementById("counter")

const valueEl = document.getElementById("value")

const decrementEl = counterEl.firstElementChild
const incrementEl = counterEl.lastElementChild

const  ButtonDecrementClick = ()=>{
    counterValue = counterValue - 1;
    valueEl.textContent = counterValue;
} ;


const ButtonIncrementClick = ()=>{
    counterValue = counterValue + 1;
    valueEl.textContent = counterValue;
    } ;
    

    decrementEl.addEventListener("click" , ButtonDecrementClick);
    incrementEl.addEventListener("click" , ButtonIncrementClick);
