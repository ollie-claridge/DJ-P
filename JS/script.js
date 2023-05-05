const mainJoke = document.querySelector("#joke");

fetch('https://dad-jokes.p.rapidapi.com/random/joke').then(res=>res.json()).then(json=>console.log(json(console.error=>console.log);