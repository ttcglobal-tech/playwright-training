function calculateSquare(num: number): number {
    return num * num;
}

const calculateTriangleArea = (base: number, height: number): number => {
    return 0.5 * base * height;
}

let squareOfFour = calculateSquare(4);
console.log(`The square of 4 is: ${squareOfFour}`);

let areaOfTriangle = calculateTriangleArea(10, 5);
console.log(`The area of a triangle with base 10 and height 5 is: ${areaOfTriangle}`);