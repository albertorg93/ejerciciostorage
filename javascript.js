localStorage.setItem("name", "Alberto"); // op1
localStorage.surname = "Rodriguez"; // op2

let firstName = localStorage.getItem("name");
let lastName = localStorage.surname;
console.log(`Hola, mi nombre es ${firstName} ${lastName}`);