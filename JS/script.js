import { getJoke } from "./JokeData.js";
import {apiKey} from "./apiKey.js"



const setupText = document.getElementById("set-up");
const punchlineText = document.getElementById("punch-line");
const nextJoke = document.getElementById("N");
const previousJoke = document.getElementById("P");
const favouriteJoke = document.getElementById("A");

function setElementText(el, text){
    el.innerText = text;
}

const options = {
    method: 'GET',
    url: 'https://dad-jokes.p.rapidapi.com/random/joke',
    headers: {
      'X-RapidAPI-Key': 'cb965a5ba8msh3988d80f57261d3p17b19fjsndc45e9cf8a6c',
      'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
    }
  };
///////


nextJoke.addEventListener("click", function(){
fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
.then(res=>res.json())
.then(json=> { 
console.log(json);
const joke = json;
setElementText(setupText, `Setup: ${joke.body[0].setup}`);
setElementText(punchlineText, `Punchline: ${joke.body[0].punchline}`);
})
.catch(console.error());    
});
///

previousJoke.addEventListener("click", function(){
    alert("clicked")
});

favouriteJoke.addEventListener("click", function(){
    alert("clciked")
});




 
