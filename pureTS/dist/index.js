"use strict";
// class User {
//     public email: string
//     name: string
//     private readonly city: string = "lagos"
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name;
//         this.city
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "lagos";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const lenny = new User("l@lc.com", "lenny");
lenny.courseCount = 4;
console.log(lenny.courseCount);
