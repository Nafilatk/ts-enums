var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
var move = Direction.Left;
console.log(move);
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
