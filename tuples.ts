const user: Array<string | number> = ["wi", "eki", 2];

//tuples are for a specific order

let tuser: [number, string, boolean];

tuser = [134, "rir", true];

let rgb: [number, number, number] = [22, 22, 2];

type User = [number, string];
const newUser: User = [13, "eokeke"];

// fallbacks
newUser[1] = "eoeoe";
console.log(newUser);

newUser.push("2222");
console.log(newUser);
