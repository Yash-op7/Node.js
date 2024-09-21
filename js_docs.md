# Inheritance and the prototype chain
- JavaScript implements inheritance by using objects. Each object has an internal link to another object called its prototype.
- That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype and acts as the final link in this prototype chain. 

# Optional chaining (?.)
The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.



# JavaScript data types and data structures
- JavaScript is a dynamic language with dynamic types
- JavaScript is also a weakly typed language
## Primitive values
- All types except `Object` define immutable values represented directly at the lowest level of the language. We refer to values of these types as primitive values.
- All primitive types, except `null`, can be tested by the `typeof` operator. `typeof` `null` returns "object", so one has to use === `null` to test for `null`.
- All primitive types, except `null` and `undefined`, have their corresponding object wrapper types, which provide useful methods for working with the primitive values. For example, the Number object provides methods like toExponential().
![Object Wrapper Classes for Primitive Types](image-6.png)
<b><center>Object Wrapper Classes for Primitive Types</center></b>

- When a property is accessed on a primitive value, JavaScript automatically wraps the value into the corresponding wrapper object and accesses the property on the object instead.
- Conceptually, `undefined` indicates the absence of a value, while `null` indicates the absence of an object (which could also make up an excuse for `typeof` `null` === "object"). The language usually defaults to `undefined` when something is devoid of a value:
`null` is a keyword, but `undefined` is a normal identifier that happens to be a global property. In practice, the difference is minor, since `undefined` should not be redefined or shadowed. for exaxmple, this works just fine: 
```js
"use strict";
let undefined = 2;
console.log(undefined);
```
- `Nan` - is a special kind of number value that's typically encountered when the result of an arithmetic operation cannot be expressed as a number. It is also the only value in JavaScript that is not equal to itself.


## Objects
- In computer science, an object is a value in memory which is possibly referenced by an identifier. In JavaScript, objects are the only mutable values. Functions are, in fact, also objects with the additional capability of being callable.
- There are two types of object properties: The data property and the accessor property. 
    - Accessor property: Associates a key with one of two accessor functions (get and set) to retrieve or store a value.
    - Data properties associate a key with a value.


- Arrays are regular objects for which there is a particular relationship between integer-keyed properties and the length property. Additionally, arrays inherit from Array.prototype, which provides a handful of convenient methods to manipulate arrays.

## some points on type coercion:
- `+` operator - if any one operand is string, then string concat is performed.
    - ❗️ if there is any other operator which deals with the string then the string will convert to int.
