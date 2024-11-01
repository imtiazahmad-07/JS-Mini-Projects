const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button)=>{
    console.log(button);
  button.addEventListener("click",(event)=>{
    console.log(event.target.id);
    if(event.target.id === 'grey'){
        body.style.backgroundColor = 'grey';
        body.style.color = 'white';
    }
    if(event.target.id === 'white'){
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    }
    if(event.target.id === 'blue'){
        body.style.backgroundColor = 'blue';
        body.style.color = 'white';
    }
    if(event.target.id === 'yellow'){
        body.style.backgroundColor = 'yellow';
        body.style.color = 'black';
    }
    if(event.target.id === 'black'){
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    }
  });
});