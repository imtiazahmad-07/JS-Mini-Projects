let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    if (height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = "<h4>Height is not valid</h4>";
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = "<h4>Weight is not Valid</h4>";
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if(bmi<18.6){
            if(bmi<18.6){
            results.innerHTML = `<h4> Body mass index is ${bmi} <br> which is under weight</h4>`
          }
          } else if(bmi>18.6 && bmi<24.9){
            results.innerHTML = `<h4> Body mass index is ${bmi} <br> which is Normal weight</h4>`
          } else{
            results.innerHTML = `<h4> Body mass index is ${bmi} <br> which is Overweight</h4>`
          }
    }
    results.style.color = "black";
});
