

//string enum
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

let currentUser: Role = Role.Admin;

if (currentUser === Role.Admin) {
  console.log("You have full access! (Ninakku ella access und!)");
}


enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Up;
console.log(move); // 0 (numeric by default)

enum color {
  red,
  blue,
  green
}
let select : color=color.blue
console.log(select)

//custum numeric value
enum directions{
  up=20,
  down=50,
  left=30,
  right=40
}
console.log(directions.left);



