const heros: Array<string | number> = [
  "wow",
  "spiderman",
  "hehe"
];

heros.push("shaktiman");
// not allowed
// allowed with | 
// heros.push(0)

const sueeue: Array<Array<number> | Array<string>> = [
  [20203, 33, 4, 5, 5, 5],
  ["do","eokde", "wpw"]
];

let score: number | string = 44;
// | allows the union of different types
score = "test";

type User = {
  name: string,
  id: number
};

type Admin = {
  username: string,
  id: number
};

let firstuser: User | Admin = { name: "ekoe", id: 12345 };
firstuser = { username: "dodo", id: firstuser.id };


export { };