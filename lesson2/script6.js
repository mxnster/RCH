const num = Number(prompt("Введите число: "));
let a = 1 , b = 1;
for (let i = 3; i <= num; i++){
    let fib = a + b;
    a = b;
    b = fib;
}
alert(b);