function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

alert( user.ref.name ); // What's the result?

// the result is: TypeError: undefined is not an object (evaluating 'user.ref.name')
// The value of this does not depend on where the function is defined. It depends on how the function is called.
// In this case, makeUser() is called as a regular function, not as a method using dot notation. Because of that, the value of this inside the function is undefined.
// The value of this is determined at the moment the function is executed. Code blocks or object literals inside the function do not change it.
// So ref: this simply takes the current value of this inside the function, which is undefined in this situation.