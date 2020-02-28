const flatsArray = [];

// с помощью индекса i задается количество квартир
for (let i = 0; i < 10; i++) { 
    flat = {
        rooms: Math.round(Math.random() * 4 + 1),
        population: Math.round(Math.random() * 5 + 1),
        area: Math.round(Math.random() * 30 + 40),
        flatNumber: i + 1,
        floorNumber: i + 1, // для простоты одна квартира на этаж
        getBill(month) {
            if (month >= 4 && month <= 10) {
                return 1 * flatsArray[i].area * (flatsArray[i].population / 2);
            } else if (month >= 1 && month <= 12) {
                return 1.8 * flatsArray[i].area * (flatsArray[i].population / 2)
            }
        }
    }
    flatsArray.push(flat)
}

const house = {
    address: "Gomel, Somova str. 99",
    year: 2010,
    floors: 5,
    flats: flatsArray,
    getArea() {
        let area = 0;

        for (let i = 0; i < flatsArray.length; i++) {
            area += flatsArray[i].area;
        }

        return area;
    },
    getPopulation() {
        let population = 0;

        for (let i = 0; i < flatsArray.length; i++) {
            population += flatsArray[i].population;
        }

        return population;
    },
    getBills() {
        let bills = 0

        for (let i = 0; i < flatsArray.length; i++) {
            for (let j = 1; j <= 12; j++) {
                bills += flatsArray[i].getBill(j);
            }
        }

        return bills;
    },
    getAverageDensity() {
        return house.getArea() / house.getPopulation();
    }
}

// демонстрация всех методов
console.log(house);
console.log(flatsArray[3].getBill(7)); // счет 4-й квартиры за 7-й месяц
console.log(house.getArea());
console.log(house.getPopulation());
console.log(house.getBills());
console.log(house.getAverageDensity());