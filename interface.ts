interface User {
  readonly dbid: number,
  email: string,
  userId: number
  googleId?: string,
  startTrial(): string
  getCoupon?(coupon: string): boolean
};

interface User {
  githubToken: string
}

interface Admin extends User {
  role: "admin" | "learner"
};

const first: User = {
  dbid: 234,
  email: "edmie",
  userId: 123,
  startTrial() {
    return "edie";
  },
  getCoupon(coupon: "234") {
    return true;
  },
  githubToken: "234t"
};

