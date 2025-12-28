
class Person {
    name: string;
    age: number;
    weight: number;
}

const p1 = new Person();
p1.name = "Subhashish"
p1.age = 20
p1.weight =45

console.log("Person p1 :", p1)

class Employee {

    private name: string;
    private dept: string;
    private sal:number;

    public constructor(name:string, dept:string, sal:number) {
        this.name = name;
        this.dept = dept;
        this.sal = sal;
    }

    public getName():string {
        return this.name;
    }

}

const e1 = new Employee("Subh", "Electronics", 5000);

console.log(e1)
console.log(e1.getName())