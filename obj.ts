const User1 = {
  name: "gig",
  email: "fkfjf@wow.win",
  isActive: true
}

// function createUser({ name: string, isPaid: boolean }) { }

// createUser({name: "fifif", isPaid: false});

// return an object

function createCourse(): {name: string, price: number} {
  return {name:"eije", price: 20202};
}

// Type alias
type User = {
  name: string,
  email: string,
  isActive: boolean
}

function createUser(user: User): User {
  return user;
}
createUser(User1)
export { };