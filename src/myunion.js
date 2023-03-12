// you can add more data types but use it wisely
var score = 33;
var lenny = {
    name: "Lennox",
    id: 334
};
lenny = { username: "LC", id: 443 };
// function getDbId(id: number | string) {
//     console.log(`DB id is: ${id}`)
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
// array
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", "2", "3", true, 3];
var data4 = ["1", "2", "3", true, 3];
var pi = 3.14;
// pi = 3.145 is not allowed
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew" will not work
