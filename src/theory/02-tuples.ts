const prices: (number | string)[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, "a"];
prices.push(110);

let user: [string, number, boolean];
// user = ["brand", 15]
// user = []
// user = ["brand"
// user = ["brand", 12]
// user = ["brand", 12, true]
user = ["brand", 12, true];
const [username, age, isDeveloper] = user;
console.log({ username, age, isDeveloper })