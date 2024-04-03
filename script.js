"use strict";

let API_URL = "https://restcountries.com/v3.1/name/";
let btn = document.querySelector("button");
let inputEl = document.querySelector("input");
let card = document.querySelector(".card");

const getCountry = async () => {

try{
    const response = await fetch(API_URL + inputEl.value);
    const data = await response.json();

    let country = data[0];

    console.log(country);

    let html = `
    <img src="${country.flags.png}" alt="Flag Image"/>
    <h2>${country.name.common}<span>
    ${country.independent === true ? "🕊"  : "🔒"} </span> </h2>

    <div class="row">
        <span>Capital: ${country.capital[0]}</span>
        <span>Region: ${country.region} </span>
        <span>Timezone: ${country.timezones[0]}</span>
    </div>
    `;
    // put html into card 
    card.innerHTML = html;
    
    } catch (err){
        card.innerHTML = "Not Found!!"
    }
};


btn.addEventListener("click", getCountry);