let countries = [{
    name: "Ukraine",
    square: "603628 кв км",
    population: "42.2 млн",
    language: "ukranian",
    phoneCode: "+380",
    flag: "https://www.countryflags.io/UA/flat/64.png"
}, {
    name: "Belarus",
    square: "207595 кв км",
    population: "9.5 млн",
    language: "russian",
    phoneCode: "+375",
    flag: "https://www.countryflags.io/BY/flat/64.png"
},
{
    name: "Russia",
    square: "17100000 кв км",
    population: "144.5 млн",
    language: "russian",
    phoneCode: "+7",
    flag: "https://www.countryflags.io/RU/flat/64.png"
},
{
    name: "USA",
    square: "9834000 кв км",
    population: "327.2 млн",
    language: "english",
    phoneCode: "+1",
    flag: "https://www.countryflags.io/US/flat/64.png"
}
];

let tableCountries = document.getElementById('countries');
for (let i = 0; i < countries.length; i++) {
    const tr = document.createElement('tr');
    tr.insertAdjacentHTML(`beforeend`,
        `<td>${countries[i].name}</td>
        <td>${countries[i].square}</td>
        <td>${countries[i].population}</td>
        <td>${countries[i].language}</td>
        <td>${countries[i].phoneCode}</td>
        <td><img src="${countries[i].flag}"></img></td>
        `);
    tableCountries.appendChild(tr);
}
