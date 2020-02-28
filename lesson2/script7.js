const seconds = Number(prompt("Введите число секунд: "));
let h = 0, m = 0, s = 0;
if (seconds <= 86399) {
    h = Math.floor(seconds / 3600);
    m = Math.floor((seconds - (h * 3600)) / 60);
    s = seconds - (h * 3600) - (m * 60);
}
alert(h + ":" + m + ":" + s);