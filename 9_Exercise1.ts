
//func to calc square
function calcSquare(numInput: number): number {
    return numInput * numInput;
}


const input: number = 5;
const numsquare: number = calcSquare(input);
console.log(`The square is ${numsquare}`);

//func to calc area of triangle
const calcAreaOfTriangle = (base: number, height: number): number => {
    return 0.5 * base * height;
}


const base: number = 3;
const height: number = 9;
const area: number = calcAreaOfTriangle(base, height);
console.log(`Inputs: B: ${base}, H:${height} ; Calculated Area: ${area}`);

