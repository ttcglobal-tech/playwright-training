const greetFunc = function (name: string): void {
  console.log("Hello, " + name.toUpperCase() + "!!");
};
greetFunc("Dave");

//passing an anonymous function as a callback to the **forEach** method
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number);
});
