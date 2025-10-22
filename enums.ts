enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}
let move: Direction = Direction.Left;
console.log(move); 


enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

let currentUser: Role = Role.Admin;

if (currentUser === Role.Admin) {
  console.log("You have full access! (Ninakku ella access und!)");
}
