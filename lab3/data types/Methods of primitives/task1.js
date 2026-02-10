let str = "Hello";
str.test = 5;
alert(str.test);

// str is a string, which is a primitive in JS
// primitives cannot store properties
// when you try to add a property, JavaScript creates a temporary wrapper object around the string.
// the property is added to that temporary object.
// but the temporary object disappears immediately.
// that’s why alert(str.test) shows undefined in non-strict mode.
// in strict mode, JavaScript does not allow writing to a primitive.
// so str.test = 5 will throw an error.
