"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
}
var sum = function (x) {
    return x + 2;
};
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5);
getUpper("lennox");
signUpUser("lenny", "lenny@dev.to", false);
loginUser("l", "l@l.com");
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
var getWord = function (s) {
    return "Contingency";
};
var heros = ["thor", "superman", "ironman"];
heros.map(function (hero) {
    return "hello Mr. ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
