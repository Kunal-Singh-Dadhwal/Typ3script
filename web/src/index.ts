// class User {
//   email: string;
//   name: string;
//   private readonly city: string = "Delhi";

//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//     // can be accessed here
//     this.city = "";
//   }
// }

//Another way to declare class variables
class User {
  private readonly city: string = "Delhi";
  private _courseCount = 1;
  constructor(public email: string, public name: string) {
    this.email = email;
    this.name = name;
    // can be accessed here
    this.city = "";
  }

  private deleteToken() {
    console.log("Token deleted");
  }

  get getEmail(): string {
    return `Email is ${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  // No return type of setters
  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNum;
  }
}

const first = new User("ekodok@efdj", "123");
// first.city = "wowow";
