function parseCount(value) {
    const parcedValue = Number.parseFloat(value);

    if (isNaN(parcedValue)) {
        throw new Error("Невалидное значение");
    }
    return parcedValue;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(sideA, sideB, sideC) {


        if (!this.isValidTriangle(sideA, sideB, sideC)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }

        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }

    isValidTriangle(a, b, c) {
        return (a + b > c) && (a + c > b) && (b + c > a);
    }

    get perimeter() {
        return this.sideA + this.sideB + this.sideC;
    }

    get area() {
        const p = this.perimeter / 2;
        const s = Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
        return Number(s.toFixed(3));
    }
}

class TriangleError {
    #areaMessage = 'Ошибка! Треугольник не существует';
    #perimeterMessage = 'Ошибка! Треугольник не существует';

    get area() {
        return this.#areaMessage;
    }

    get perimeter() {
        return this.#perimeterMessage;
    }
}

function getTriangle(sideA, sideB, sideC) {
    try {
        return new Triangle(sideA, sideB, sideC);
    } catch (error) {
        return new TriangleError();
    }
}

