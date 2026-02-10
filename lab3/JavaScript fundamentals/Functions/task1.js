// Is "else" required?
//1st var
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        // ...
        return confirm('Did parents allow you?');
    }
}

//2nd var
function checkAge(age) {
    if (age > 18) {
        return true;
    }
    // ...
    return confirm('Did parents allow you?');
}

// ANSWER: no difference. in both cases result will be the same and return confirm('Did parents allow you?') executes exactly when the if condition is falsy.