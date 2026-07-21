let a = 100;

console.log(a++ + ++a +a++ + ++a);

console.log(a);  

// O/p : 408, 104

let a = 37;

console.log(--a + a--);

console.log(a);
//o/p : 72,35

let a = 5; 
let b = a-- - --a; 
console.log(b, a);
//O/p :- 3,3

let i = 1; 

let r = i++ > 1 ? i++ : ++i; 
console.log(r, i);
//o/p : 2,3
