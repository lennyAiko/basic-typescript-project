"use strict";
exports.__esModule = true;
var User = {
    name: "lennox",
    email: "lennox@lco.dev",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "lennox", isPaid: false });
var newUser = { name: "lennox", isPaid: false, email: "h@h.dev" };
createUser(newUser);
// function name() returntype{} and object
function createCourse() {
    return { name: "typescript", price: 3.99 };
}
