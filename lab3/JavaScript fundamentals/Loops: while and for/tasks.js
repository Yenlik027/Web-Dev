// 1. Last loop value
//What is the last value alerted by this code? Why?
let i = 3;
while (i) {
    alert( i-- );
} // answer is: 1. Every loop iteration decreases i by 1. The check while(i) stops the loop when i = 0.


// 2. Which values does the while loop show?
let i = 0;
while (++i < 5) alert( i ); // from 1 to 4

let i = 0;
while (i++ < 5) alert( i ); // from 1 to 5

// 3. Which values get shown by the "for" loop?
for (let i = 0; i < 5; i++) alert( i ); // from 0 to 4

for (let i = 0; i < 5; ++i) alert( i ); // from 0 to 4

// 4. Output even numbers in the loop
for (let i=2; i<=10; i++){
    if (i%2 == 0) {
        alert( i );
    }
}

// 5.Replace "for" with "while"
//before
for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
}
//after
let i=0;
while (i<3){
    alert(`number ${i}!`);
    i++;
}


// 6. Repeat until the input is correct
let num;
do {
    num = prompt("write number greater than 100", 0);
} while (num <= 100 && num);

// 7. Output prime numbers
// Let n be any positive integer
let n = 10;
nextPrime:
    for (let i = 2; i <= n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }
        alert( i );
    }


