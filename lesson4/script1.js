// функция вычисления всех аргументов
function getSum() {
    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum;
}

// функция получения случайного числа в заданном диапазоне
const getRandomNumber = (from, to) =>
    n = Math.round(Math.random() * (to - from) + from);

// функция вычисления расстояния между двумя объектами-точками
const getDistance = (point1, point2) =>
    r = (((point2.x - point1.x) ** 2) + ((point2.y - point1.y) ** 2)) ** (1 / 2);

/* функция генерирующая случайный цвет в формате RGB
для генерации случайного числа используется ранее
написанная функция getRandomNumber()
*/
function getRGB() {
    const color = {
        r: getRandomNumber(0, 255),
        g: getRandomNumber(0, 255),
        b: getRandomNumber(0, 255)
    }

    return color;
}

// функция для проверки простоты введенного числа
const isPrime = num => {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}

// объекты-точки для проверки функции getDistance
const pointA = {
    x: 2,
    y: 3
}

const pointB = {
    x: 5,
    y: 8
}

// для проверки работоспособности функций
console.log(getSum(1, 3, 54, 26, 17));
console.log(getRandomNumber(1, 10));
console.log(getDistance(pointA, pointB));
console.log(getRGB());
console.log(isPrime(98));