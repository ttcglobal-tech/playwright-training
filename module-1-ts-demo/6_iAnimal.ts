// Define an interface for Animals
interface IAnimal {
    name: string;
    age: number;
    species: string;
    makeSound(): void;
}

// Define the Animal class implementing the IAnimal interface
//  export class Animal implements IAnimal {
class Animal implements IAnimal {

    // Properties
    name: string;
    age: number;
    species: string;

    // Constructor
    constructor(name: string, age: number, species: string) {
        this.name = name;
        this.age = age;
        this.species = species;
    }

    // Method
    makeSound(): void {
        console.log("Animal makes a sound");
    }
}

// Define a subclass of Animal
// export class Dog extends Animal {
class Dog extends Animal {

    // Additional properties specific to Dog
    breed: string;

    // Constructor
    constructor(name: string, age: number, breed: string) {
        super(name, age, "Dog"); // Call the superclass constructor
        this.breed = breed;
    }

    // Overridden method
    makeSound(): void {
        console.log("Woof!");
    }
}

// Create instances of Animal and Dog
const myAnimal: Animal = new Animal("Leo", 5, "Lion");
const myDog: Dog = new Dog("Buddy", 3, "Labrador");

// Call methods
myAnimal.makeSound(); // Output: Animal makes a sound
myDog.makeSound();    // Output: Woof!
