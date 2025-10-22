// enum Direction {
//   Up = "UP",
//   Down = "DOWN",
//   Left = "LEFT",
//   Right = "RIGHT"
// }
// let move: Direction = Direction.Left;
// console.log(move); 
// enum Role {
//   Admin = "ADMIN",
//   User = "USER",
//   Guest = "GUEST"
// }
// let currentUser: Role = Role.Admin;
// if (currentUser === Role.Admin) {
//   console.log("You have full access! (Ninakku ella access und!)");
// }
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var move = Direction.Up;
console.log(move); // 0 (numeric by default)
