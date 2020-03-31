const links = document.querySelectorAll('a');
let href = [];
links.forEach((link, i) => {
    link.addEventListener('click', function (e) {
        href[i] = link.getAttribute('href');
        let isClicked = confirm(`Do u rly wanna leave me alone?\nYou will be redirected to ${href[i]}`);
        if (isClicked == false) {
            e.preventDefault();
        }
    });
});


const myTextbox = document.getElementById('my-textbox');
let availableLetters = "aeyuioAEYUIO";
myTextbox.addEventListener('keypress', function (e) {
    let inputLetter = e.charCode;
    for (let i = 0; i < availableLetters.length; i++) {
        if (inputLetter != availableLetters.charCodeAt(i) || myTextbox.value.length >= 12) {
            e.preventDefault();
        }
        else {
            myTextbox.value += String.fromCharCode(inputLetter);
        }
    }
});

let items = document.getElementById("items");
const menu = document.getElementById('menu');
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    items.style.left = `${e.pageX}px`;
    items.style.top = `${e.pageY}px`;
    menu.style.display = "block";

})
window.addEventListener('click', function (e) {
    if (e.target === menu) {
        menu.style.display = "none";
    }

});
items.addEventListener('click', function (e) {
    if (e.target.tagName === "P") {
        alert(e.target.innerText);
    }
})