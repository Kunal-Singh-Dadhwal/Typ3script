function add(num1: number, num2: number): number {
  return num1 + num2;
}

function getUpper(word: string): string {
  return word.toUpperCase();
}

//default value
let login = (name: string, email: string, hasPaid: boolean = false) => {}

let myval = add(3, 5);
console.log(myval);

getUpper("ririririr");
login("eie", "eieine");

function getValue(myVal: number): (boolean | string) {
  if (myVal > 5) {
    return true;
  }
  return "200 OK";
}

const heros = ["thor", "superman", "ironman"];

heros.map((hero): string => {
  return `hero is ${hero}`;
})
console.log(heros);

function erro(errmsg: string): void {
  console.log(errmsg);
}
function handleerror(errmsg: string): never {
  throw new Error(errmsg);
}

export { };