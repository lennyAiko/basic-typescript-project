"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(true);
function identityFour(val) {
    return val;
}
identityFour({ brand: "pepsi", type: 4 });
function getSearchProducts(products) {
    // do some DB operations
    const myIndex = 3;
    return products[myIndex];
}
const getMoreProducts = (products) => {
    // do some DB operations
    const myIndex = 4;
    return products[myIndex];
};
