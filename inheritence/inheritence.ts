class person{
    firsName:string
    lastName:string
    age:number

    constructor(firstName:string,lastName:string,age:number){
        this.firsName=firstName,
        this.lastName=lastName,
        this.age=age
    }

    greet():string{
        return `Hello ${this.firsName} ${this.lastName}`
    }
}

class User extends person{
    constructor(firstName:string,lastName:string,age:number){
        super(firstName,lastName,age)
    }
}

class Admin extends person{
    role:string
    constructor(firstName:string,lastName:string,age:number,role:string){
        super(firstName,lastName,age)
        this.role =role
    }

    greet(){
        return `Hai ${this.role} ${this.firsName} ${this.lastName} `
    }
}

let user = new User("Siva","V",25)
let user1 = new Admin("Rahul","V",24,"Admin")

console.log(user.greet());
console.log(user1.greet());
