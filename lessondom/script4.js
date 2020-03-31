let itemsArray = [{
    name: "Google Pixel 4",
    discription: "Android, экран 5.7 OLED (1080x2280), Qualcomm Snapdragon 855, ОЗУ 6 ГБ, флэш-память 128 ГБ, камера 12.2 Мп, аккумулятор 2800 мАч, 1 SIM",
    inStock: "10",
    price: "999$",
    img: "https://content2.onliner.by/catalog/device/header/c8fe269e42aba9a77a2f180290f2b246.jpeg"
},
{
    name: "OnePlus 7",
    discription: "Android, экран 6.67 AMOLED (1440x3120), Qualcomm Snapdragon 855, ОЗУ 8 ГБ, флэш-память 256 ГБ, камера 48 Мп, аккумулятор 4000 мАч, 2 SIM",
    inStock: "5",
    price: "799$",
    img: "https://content2.onliner.by/catalog/device/header/a6c912913e3ab0b2f6e90e080db6458a.jpeg"
},
{
    name: "IPhone XL",
    discription: "Apple iOS, экран 6.1 IPS (828x1792), Apple A13 Bionic, ОЗУ 4 ГБ, флэш-память 64 ГБ, камера 12 Мп, аккумулятор 3046 мАч, 1 SIM",
    inStock: "5",
    price: "1399$",
    img: "https://content2.onliner.by/catalog/device/header/e2189f90f9088975c553ec33431fc186.jpeg"
},
{
    name: "Galaxy S20",
    discription: "Android, экран 6.2 AMOLED (1440x3200), Exynos 990, ОЗУ 8 ГБ, флэш-память 128 ГБ, карты памяти, камера 12 Мп, аккумулятор 4000 мАч, 2 SIM",
    inStock: "7",
    price: "1000$",
    img: "https://content2.onliner.by/catalog/device/header/0b2a8e556e11e345f772ff65073146bd.jpeg"
},
{
    name: "OnePlus 6",
    discription: "Android, экран 6.67 AMOLED (1440x3120), Qualcomm Snapdragon 855, ОЗУ 8 ГБ, флэш-память 256 ГБ, камера 48 Мп, аккумулятор 4000 мАч, 2 SIM",
    inStock: "5",
    price: "799$",
    img: "https://content2.onliner.by/catalog/device/header/a6c912913e3ab0b2f6e90e080db6458a.jpeg"
},
{
    name: "IPhone X",
    discription: "Apple iOS, экран 6.1 IPS (828x1792), Apple A13 Bionic, ОЗУ 4 ГБ, флэш-память 64 ГБ, камера 12 Мп, аккумулятор 3046 мАч, 1 SIM",
    inStock: "5",
    price: "1399$",
    img: "https://content2.onliner.by/catalog/device/header/e2189f90f9088975c553ec33431fc186.jpeg"
},
{
    name: "Galaxy S10",
    discription: "Android, экран 6.2 AMOLED (1440x3200), Exynos 990, ОЗУ 8 ГБ, флэш-память 128 ГБ, карты памяти, камера 12 Мп, аккумулятор 4000 мАч, 2 SIM",
    inStock: "7",
    price: "1000$",
    img: "https://content2.onliner.by/catalog/device/header/0b2a8e556e11e345f772ff65073146bd.jpeg"
},
{
    name: "OnePlus 7T",
    discription: "Android, экран 6.67 AMOLED (1440x3120), Qualcomm Snapdragon 855, ОЗУ 8 ГБ, флэш-память 256 ГБ, камера 48 Мп, аккумулятор 4000 мАч, 2 SIM",
    inStock: "5",
    price: "799$",
    img: "https://content2.onliner.by/catalog/device/header/a6c912913e3ab0b2f6e90e080db6458a.jpeg"
}
];

let itemsList = document.getElementById('items');
for (let i = 0; i < itemsArray.length; i++) {
    itemsList.insertAdjacentHTML(`beforeend`,
        `<li align="center" class="card"><h2 id="item-name">${itemsArray[i].name}</h2>
        <p id="item-discription">${itemsArray[i].discription}</p>
        <p id="item-stock">В наличии: ${itemsArray[i].inStock} шт.</p>
        <p class="price">${itemsArray[i].price}</p>
        <img src="${itemsArray[i].img}"></img></li>
        `);
}
