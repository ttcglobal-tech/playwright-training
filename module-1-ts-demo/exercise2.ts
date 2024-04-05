interface IPerson {
    name: string;
    age: number;
    email: string;
}

class Person implements IPerson {
    name: string;
    age: number;
    email: string;

    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    sayHello(): void {
        console.log("Hello " + this.name);
    }
}

let person1 = new Person("Lan", 30, "lan@example.com");
let person2 = new Person("Peter", 25, "peter@example.com");
let person3 = new Person("Bob", 40, "bob@example.com");

person1.sayHello();
person2.sayHello();
person3.sayHello();