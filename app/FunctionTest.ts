

function multiply(a:number, b:number) : number {
    return a*b;
}

console.log(multiply(6,12));
console.log(multiply(45,53));


function addNumbers(a:number, b:number, c?: number): number {
    return a+b+(c|0);
}

console.log(addNumbers(1,4,6));
console.log(addNumbers(1,5))


function addManyNUmbers(a:number, b:number, ...restNumbers:number[]) {
    return a + b + restNumbers.reduce((p,c) => p+c,0);
}

console.log(addManyNUmbers(1,2,3));
console.log(addManyNUmbers(1,2,3,7,8,9,3));