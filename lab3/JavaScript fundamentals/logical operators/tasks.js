// 1. What's the result of OR?
alert( null || 2 || undefined ); // answer is: 2

// 2.What's the result of OR'ed alerts?
alert( alert(1) || 2 || alert(3) ); // firstly 1 and then 2.
// There will be no 3, because the evaluation does not reach alert(3).

// 3. What is the result of AND?
alert( 1 && null && 2 ); // answer is: null. Because it’s the first falsy value

// 4. What is the result of AND'ed alerts?
alert( alert(1) && alert(2) ); // first 1 and then undefined.

// 5. The result of OR AND OR
alert( null || 2 && 3 || 4 ); // answer is: 3.

// 6.Check the range between
// if (age >= 14 && age <= 90)

// 7. Check the range outside
// 1st var using NOT !
// if (!(age >= 14 && age <= 90))
// 2nd var without NOT !.
// if (age < 14 || age > 90)

// 8. A question about "if"
// answer: the first and the third will execute.
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' ); // Doesn't run
// -1 && 0 = 0, falsy
if (null || -1 && 1) alert( 'third' );


// 9. Check the login
let username = prompt("Who's there?", '');
if (username === 'Admin') {
    let password = prompt('Password?', '');
    if (password === 'TheMaster') {
        alert( 'Welcome!' );
    } else if (password === '' || password === null) {
        alert( 'Canceled' );
    } else {
        alert( 'Wrong password' );
    }
} else if (username === '' || username === null) {
    alert( 'Canceled' );
} else {
    alert( "I don't know you" );
}






