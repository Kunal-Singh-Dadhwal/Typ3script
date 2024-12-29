type User = {
  readonly _id: string
  name: string,
  email: string,
  isActive: boolean,
  creditcardDetails?: number,
}

// ? stands for optional

function createUser(user: User): User{
  let newUser = {
    _id: "1345",
    name: "eije",
    email: "frij@ijvij.ci",
    isActive: false
  }

  return newUser;
}

let firstuser = createUser({ _id: "2334", name: "irfk", email: "wije", isActive: true });
firstuser.email = "wow@wow.win";
// not allowed
// firstuser._id = "11223";
export { };