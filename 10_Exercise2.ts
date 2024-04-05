interface Person {
    name: string;
    age: number;
    email: string;
}

class PersonInfo implements Person {
    constructor(public name: string, public age: number, public email: string) {}

    sayHello(): void {
        console.log(`Hola ${this.name}! Your age is ${this.age} and your email is ${this.email}. `);
    }
}

//call the arrow func
const person1 = new PersonInfo("Katrine", 22, "test@gmail.com");
const person2 = new PersonInfo("Sheila", 30, "sheila@gmail.com");

person1.sayHello(); //Prints Katrine's info
person2.sayHello(); //Prints Sheila's info