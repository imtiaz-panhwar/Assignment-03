"use strict";
// printing person Name in Lower case.
let personName = "Arslan Khan";
console.log("to lower case: " + personName.toLowerCase());
// printing person Name in Uppercase case.
console.log("to upper case: " + personName.toUpperCase());
// printing person Name in titlecase case.
console.log("to title case: " + personName.split('  ').map(words => words.charAt(0).toUpperCase() + personName.slice(1).toLowerCase()).join(' '));
