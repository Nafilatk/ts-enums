// function echo<T>(value: T): T {
//   return value;
// }

// let a = echo("Hello");   // T = string
// let b = echo(123);       // T = number
// let c = echo(true);      // T = boolean
// console.log(a,b,c);


// function gen(value:any){
//     return value
// }
// let a= gen(1234)
// let b= gen (true)
// console.log(gen("name"));
// console.log(a,b);


//with generics 

// function identity <T>(val:T):T{
//     return val
// }

// let c= identity <number>(9876543)             // <number> its not imp ,ts can automatically 
//                                               // identify which type of data we use 
// let d = identity <string>("bjcnjdsc")
// let e = identity <boolean>(false)
// let f =identity(2345678)

// console.log(c,d,e,typeof(f));




// function naff <P>(n:P):P{
//     return n
// }

// console.log(naff("qwefgdx"));


// function array <T>(arr:T[]):T{
//     return arr
// }

// let g =array(["1","cv","wd","sd"])

// console.log(array([1,2,3,4,5,6]));
// console.log(array(["1","cv","wd","sd"]));
// console.log(g);


function person <t> (p:t):t{
    return p
}

console.log(person("sjfljjk"));
console.log(person(123456789));
console.log(person(true));