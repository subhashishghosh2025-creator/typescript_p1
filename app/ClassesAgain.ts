
class Student {
    private readonly name : string;
    private age : number;
    private subject : string;
    private originCountry : string;

    public constructor(name:string, age:number, subject:string, originCountry:string="Maths") {
        this.name = name;
        this.age = age;
        this.subject = subject;
        this.originCountry = originCountry;
    }

    public getOriginCountry(): string {
        return this.originCountry;
    }
}


const s1 = new Student("Alex", 20, "English");


console.log("Student S1", s1);
console.log("s1 Country : ", s1.getOriginCountry())