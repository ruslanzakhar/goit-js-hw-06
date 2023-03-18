const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener('input', onInputChange)

function onInputChange (event){
    console.log(event.currentTarget.value);
    if (inputEl.value === ""){
        outputEl.textContent = "Anonymous"
    }
    else{
        outputEl.textContent = event.currentTarget.value;
    }
};




