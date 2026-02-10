// Shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Example
let arr = [1, 2, 3, 4, 5];
shuffle(arr);
alert(arr);
// output: 3,1,5,2,4
// every time you run shuffle(arr) and alert(arr), the order can be different.