const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number{
    return val
}

function identityTwo(val: any): any {
    return val
}

function identityThree<Type>(val: Type): Type {
    return val
}

identityThree(true)

function identityFour<T>(val: T): T {
    return val
}

interface Bootle {
    brand: string,
    type: number
}

identityFour<Bootle>({brand: "pepsi", type: 4})

function getSearchProducts<T>(products: T[]): T {
    // do some DB operations
    const myIndex = 3
    return products[myIndex]
}

const getMoreProducts = <T,>(products: T[]): T => {
        // do some DB operations
        const myIndex = 4
        return products[myIndex]
}