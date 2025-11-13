class User{
    firstName:string;
    lastName:string;
    age?:number

    constructor(firstName:string,lastName:string,age:number=23){
        this.firstName=firstName
        this.lastName=lastName
        this.age=age
    }

    greet(){
        console.log(`Hai ${this.firstName} ${this.lastName}`)
    }

    getAge(){
        return this.age;
    }
}

let user1 = new User("Siva","V")
let user2 = new User("Praveen","J",25)


user1.greet()
console.log(user1.getAge())

user2.greet()
console.log(user2.getAge())