//fixed variant
function pow(x, n) { //added space between arguments
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x; // the contents of { } on a new line
    }
    return result;
}
let x = prompt("x?", "");
let n = prompt("n?", "");
if (n <= 0) {
    alert(`Power ${n} is not supported,
    please enter an integer number greater than zero`); //long lines can be split
} else {
    alert( pow(x, n) );
}