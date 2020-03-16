let counter = 0;
setInterval(function () {
const date = new Date();
let div = document.getElementById('time');
if (counter === 0) {
div.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
counter++;
}
else {
div.innerText = `${date.getHours()} ${date.getMinutes()} ${date.getSeconds()}`;
counter = 0;
}
}, 500);