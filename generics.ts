function echo<T>(value: T): T {
  return value;
}

let a = echo("Hello");   // T = string
let b = echo(123);       // T = number
let c = echo(true);      // T = boolean
console.log(a,b,c);