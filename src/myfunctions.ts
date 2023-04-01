function addTwo(num: number): number {
    return num + 2
}

let sum = (x: number): number => {
    return x + 2
}

function getUpper(val: string) {
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

addTwo(5)
getUpper("lennox")
signUpUser("lenny", "lenny@dev.to", false)
loginUser("l", "l@l.com")

function getValue(myVal: number): boolean | string {
    if (myVal > 5) {
        return true
    }
    return "200 OK"
}

const getWord = (s: string): string => {
    return "Contingency"
}

const heros = ["thor", "superman", "ironman"]

heros.map((hero): string => {
    return `hello Mr. ${hero}`
})

function consoleError(errmsg: string): void{
    console.log(errmsg)
}

function handleError(errmsg: string): never{
    throw new Error(errmsg)
}

export {}