//  Primitive

// 7 types : string, number, boolean, null, undefined, symbol, bigInt

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNum = 45586548786n;

// console.log(typeof bigNum);
// non-primitive or reference type

// 3 types : arrays, objects, function

const villans = ['deadpool','panda','king'];

// console.log(villans[2]);

let newObj = {
    name: "Harshsinh",
    age: 22,
}

// console.log(typeof newObj)

// ---------------------- function defi ---------------------
// function name(params) {
    
// }

// ------------------ simple way -----------------

function first() {
    console.log('first way');
}

// first();

// -------------------- another way storing in variable -----------------------

const newFun = function(){
    console.log("Created");
}

// newFun();

