import { getJoke } from "./JokeData.js";
import {ipaKey} from "./apiKey.js"



const setupText = document.getElementById("setup");
const punchlineText = document.getElementById("punchline");
const nextJoke = document.getElementById("N");
const previousJoke = document.getElementById("P");
const favouriteJoke = document.getElementById("S");

function setElementText(el, text){
    el.innerText = text;
}

fetch('https://dad-jokes.p.rapidapi.com/random/joke')
.then(res=>res.json())
.then(json=> { 
console.log(json);
const joke = json;
setElementText(setupText, `Setup:${body.setup}`);
setElementText(punchlineText, `Punchline:${body.punchline}`);
})
.catch(console.error());

///////


nextJoke.addEventListener("click", function(){
    
alert("clicked");
});
///

previousJoke.addEventListener("click", function(){
    alert("clicked")
});

favouriteJoke.addEventListener("click", function(){
    alert("clciked")
});




 






/// async function joke(){
//     const currentJoke = await joke(getJoke);

// }

// const currentJoke = await getJoke;

// console.log(currentJoke);

// nextJoke.addEventListener("next", function(e){

// })

// const mainJoke = await joke ("joke");
// joke("joke");
// console.log(joke);