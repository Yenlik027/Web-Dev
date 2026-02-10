// Calling in an array context
let arr = ["a", "b"];

arr.push(function() {
    alert( this );
})

arr[2](); // answer: a,b,function(){...}
