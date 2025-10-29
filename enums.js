//string enum
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
    Role["Guest"] = "GUEST";
})(Role || (Role = {}));
var currentUser = Role.Admin;
if (currentUser === Role.Admin) {
    console.log("You have full access! (Ninakku ella access und!)");
}
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var move = Direction.Up;
console.log(move); // 0 (numeric by default)
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["blue"] = 1] = "blue";
    color[color["green"] = 2] = "green";
})(color || (color = {}));
var select = color.blue;
console.log(select);
//custum numeric value
var directions;
(function (directions) {
    directions[directions["up"] = 20] = "up";
    directions[directions["down"] = 50] = "down";
    directions[directions["left"] = 30] = "left";
    directions[directions["right"] = 40] = "right";
})(directions || (directions = {}));
console.log(directions.left);
