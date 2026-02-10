// Repeat until the input is a number
function readNumber() {
    let num;
    do {
        num = prompt("number:", 0);
    } while ( !isFinite(num) );
    if (num === null || num === '') return null;
    return +num;
}
alert(`read: ${readNumber()}`);