const User = {
    name: "lennox",
    email: "lennox@lco.dev",
    isActive: true 
}

function createUser({name: string, isPaid: boolean}) {}

createUser({name: "lennox", isPaid: false})

let newUser = {name: "lennox", isPaid: false, email: "h@h.dev"}

createUser(newUser)

// // function name(): returntype{} and object
function createCourse():{name: string, price: number}{
    return {name: "typescript", price: 3.99}
}

// TYPE ALIASES

// This really saves time and repitition
// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }

// function createUser(user: User): User {
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})

type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credCardDetails?: number
}

let myUser: User = {
    _id: "12345",
    name: "l",
    email: "l@l.dev",
    isActive: false
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
} 

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

myUser.email = "l@l.dev"
// myUser._id = "asa"

export {}