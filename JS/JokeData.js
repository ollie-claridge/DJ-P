import { apiKey } from "./apiKey.js";

// pokemon method///

async function getJoke(getJoke){
    try{

    const res = await fetch(
       `https://dad-jokes.p.rapidapi.com/random/joke`
    )
        const json = await res.json();
        return json;
}
    catch(error){
console.log("error");
    }
}
export {getJoke};








