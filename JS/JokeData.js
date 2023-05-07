import { apiKey } from "./apiKey";

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












////wetherapp method///

// async function joke(joke){
//     console.log("Finding joke");
//     const url = `https://dad-jokes.p.rapidapi.com/random/joke=${joke}`;

// const accsess = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': apiKey,
// 		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
// 	}
// }

// try{

//     const display = await fetch(url, accsess);

//     const result = await display.text();
//     return result;

// } catch(error){
//     console.error(error);
// }
// }

// export {joke};