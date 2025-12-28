
let isActive: boolean = false;
let hasPermission: boolean = true;

let decimal: number = 6;
let  hexadecimal : number = 0x1233a1
let binary: number = 0b1010;
let octal : number = 0o7442;
let salary:number = 452.23;


let color : string = "Red";
let fullName : string = "Subhashish Ghosh"
let age:number = 30
let sentense: string = `Hello Mr ${fullName}, Your age is updated to ${age}`

console.log("Hexadecimal number : ", hexadecimal)
console.log("My Sentense :", sentense);


const user = {
    name : "Subhashish Ghosh",
    age : 38,
    salary : 10
}

console.log("user.name = " + user.name)
console.log("user.age = ", user.age);


let data:any = true;
data = 10;
console.log("data :" , data);

data ="Subhashish"
console.log("data : ", data);


function processValue(value: unknown) {
  if (typeof value === 'string') {
    // value is now treated as string
    console.log(value.toUpperCase());
  } else if (Array.isArray(value)) {
    // value is now treated as any[]
    console.log(value.length);
  } else if (typeof value === 'number') {
    console.log(value + 1);
  }
}

processValue("Ghosh");
processValue(100.12)