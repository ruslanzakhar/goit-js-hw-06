const inputEl = document.querySelector(`input`);


inputEl.addEventListener(`blur`, onInputBlur);

function onInputBlur(event){

   const total = event.currentTarget.value.length

    if(Number(inputEl.dataset.length) !== total){
        inputEl.classList.add(`invalid`);
        console.log(total);
    } 

    else {
        inputEl.classList.remove(`invalid`);
         inputEl.classList.add(`valid`);
        console.log(total);
    }
       
    };
        
