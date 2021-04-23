// Tipo: null 
// Tipado explicito
let nullVariable: null;
nullVariable = null;
// nullVarable = 1; // Error!

let otherVariable = null;
otherVariable = "test";

console.log('nullVarable', nullVariable);
console.log('otherVariable', otherVariable);

//Tipo: undefined
let undefinedVariable: undefined = undefined;
// undefinedVariable ='test'; // Error!

let otherUndefined = undefined;
otherUndefined = 1;

console.log('undefined', undefinedVariable);
console.log('otherUndefined', otherUndefined);

// null y undefined: como subtipos
let albumName: string;
// albumName = null;
// albumName = undefined;

// --strictNullCheks