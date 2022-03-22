/* let x: number;   //* Explicitly declares x as a number type
let y = 1;       //* Implicitly declares y as a number type
let z;           //* Declares z without initializing it (z is an variable typed as any)
z = 1;
z = "oi";
console.log(z) */
/* Module 2: Declare variable types in TypeScript
   Lab start  */
/*  EXERCISE 1
    TODO: Modify the code to add types to the variable declarations.
    The resulting JavaScript should look the same as the original example when you're done. */
var firstName;
var lastName;
var age;
var ukCitizen;
var fullName = {
    firstName: 'Allana',
    lastName: 'Mendes',
    age: 26,
    ukCitizen: false
};
console.log("meu nome \u00E9 ".concat(fullName.firstName, " ").concat(fullName.lastName));
if (fullName.ukCitizen) {
    console.log("My name is " + fullName.firstName + ", I'm " + fullName.age + ", and I'm a citizen of the United Kingdom.");
}
else {
    console.log("My name is " + fullName.firstName + fullName.lastName + ", I'm " + fullName.age + ", and I'm not a citizen of the United Kingdom.");
}
