const advice_number = document.getElementById("advice-number")
const advice = document.getElementById("advice")
const adviceBtn = document.getElementById("advice-button")


function adviceFetcher(){
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => { 
        advice_number.textContent = `Advice #${data.slip.id}`
        advice.textContent = `"${data.slip.advice}"`})
    .catch(err => {
        adviceError.textContent = `Error!`
        advice.textContent = `An error occured, please refresh the page.`
    } )
}

adviceBtn.addEventListener("click", function(){
    adviceFetcher()
} )