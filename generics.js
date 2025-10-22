function echo(value) {
    return value;
}
var a = echo("Hello"); // T = string
var b = echo(123); // T = number
var c = echo(true); // T = boolean
console.log(a, b, c);
