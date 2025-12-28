function greet(name?: string): string {
  return `Hello World, ${name || "John Doe"}  !`;
}

const message1: string = greet("Subhashish");
console.log(message1);

const message2: string = greet();
console.log(message2);