// const user: (string | number)[] = [1, 'lc']
let tUser: [string, number, boolean]

tUser = ["lc", 131, true]
// tUser = [131, "lc", true] will not work because order is restricted

let rgb: [number, number, number] = [255, 123, 112]

type User = [number, string]

const newUser: User = [112, "lc@lc.dev"]

newUser[1] = "lc@lc.dev"
newUser.push(true)

export {}