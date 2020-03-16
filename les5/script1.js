const circleArray = [];
for (let i = 0; i < 100; i++) {
    circle = {
        x: Math.round(Math.random() * 1000),
        y: Math.round(Math.random() * 1000),
        r: Math.round(Math.random() * 1000)
    }
    circleArray.push(circle);
}

function sortByKey(arrayName, key) {
    const circleArrayClone = arrayName.slice();
    return circleArrayClone.sort((a, b) => a[key] - b[key]);
}

console.log(circleArray);
console.log(sortByKey(circleArray, "r"));
