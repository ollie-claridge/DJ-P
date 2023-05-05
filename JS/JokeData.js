import { apiKey } from "./apiKey";

async function getJoke(getJoke){
    try{

    const res = await fetch(
       `https://dad-jokes.p.rapidapi.com/random/joke`
    )
        const json = await res.json();}
    catch{
console.log("error");
    }
}

export {getJoke};