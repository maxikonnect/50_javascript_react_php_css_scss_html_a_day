
function add(x, y){return x + y};
function subtract(x, y){return x - y};
function multiply(x, y){return x * y};
function divide(x, y){return x / y};

function operation(operator, operand1, operand2){
    return operator(operand1, operand2);
}

console.log(operation(add, 20, 30));// 50

const operators = {
    add: (x,y) => x+y,
    subtract: (x,y) => x-y,
    multiply: (x,y) => x*y,
    divide: (x,y) => x/y,
    pow: Math.pow // This works for predefined functions too
};
// This function takes the name of an operator, looks up that operator
// in the object, and then invokes it on the supplied operands. Note
// the syntax used to invoke the operator function.
function operate2(operation, operand1, operand2) {
    if (typeof operators[operation] === "function") {
    return operators[operation](operand1, operand2);
    }
    else throw "unknown operator";
}
operate2("add", "hello", operate2("add", " ", "world")) // => "hello world"
operate2("pow", 10, 2) // => 100