//Arrays
const names : string[] = ["Ramesh"]
names.push("Suresh");
names.push("Subhashish")
names.push("Alexa")
names.push("Rabina")

console.log("Names ", names)
console.log("First Name :", names[0])



//Tupples
let mytupple : [number, boolean, string];

mytupple = [121, false, "Subhashish"]

mytupple.push(45)
mytupple.push("Ghosh")



//Objects
const car : {type: string, model: string, year: number} = {
    type: "Toyota",
    model: "Corolla",
    year: 1991
}


const hotel : {type: string, name: string, cost?: number} = {
    type: "Deluxe",
    name: "Taj"
}