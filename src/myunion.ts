// you can add more data types but use it wisely
let score: number | string = 33

type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let lenny: User | Admin = {
    name: "Lennox",
    id: 334
}

lenny = {username: "LC", id: 443}

// function getDbId(id: number | string) {
//     console.log(`DB id is: ${id}`)
// }
getDbId(3)
getDbId("3")

function getDbId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase()
    }
}

// array

const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (number | string | boolean)[] = ["1", "2", "3", true, 3]
const data4: any[] = ["1", "2", "3", true, 3]

let pi: 3.14 = 3.14
// pi = 3.145 is not allowed

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew" will not work