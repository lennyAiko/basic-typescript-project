const User = {
    name: "lennox",
    email: "lennox@lco.dev",
    isActive: true 
}

function createUser({name: string, isPaid: boolean}) {}

createUser({name: "lennox", isPaid: false})

let newUser = {name: "lennox", isPaid: false, email: "h@h.dev"}

createUser(newUser)

// function name() returntype{} and object
function createCourse():{name: string, price: number}{
    return {name: "typescript", price: 3.99}
}

export {}