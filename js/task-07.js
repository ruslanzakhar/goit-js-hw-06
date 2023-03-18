const inputEl = document.querySelector(`input`);

const spanEl = document.querySelector(`span`);


inputEl.addEventListener(`input`, onInputChange);

function onInputChange(event){
    const textSize = event.currentTarget.value + `px`
    console.log(textSize);
    return spanEl.style.fontSize = textSize;
      
}