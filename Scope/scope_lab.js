//Global scope
var globalVar ="I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

//console.log(blockVar);
//console.log(blockLet);

function show(){
var functionVar = "I'm a block-scoped var";
let functionLet = "I'm a block-scoped let";
const functionConst = "I'm a block-scoped const";
}
show();

//console.log(functionVar);
//console.log(functionLet);
//console.log(functionConst);

{
    let blockLet = 'Inside block with let';
    const blockConst = 'Inside block with const';
    var blockVar = 'Inside block with var';

    // Attempting to reassign variables within the block
    blockLet = 'Reassigned inside block';  // This is allowed
    // blockConst = 'Reassigned inside block';  // This will cause an error
    blockVar = 'Reassigned inside block';  // This is allowed
}

console.log(blockLet);  // This will cause an error because blockLet is not defined outside the block
console.log(blockConst);  // This will cause an error because blockConst is not defined outside the block
console.log(blockVar);  
blockVar = 'Reassigned outside block'; 