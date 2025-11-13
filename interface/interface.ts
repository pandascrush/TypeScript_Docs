//without interface

function greetUser(user:{firstName:string,lastName:string,age:number}){
    console.log(user.firstName,user.lastName)
}

function logUser(user:{firstName:string,lastName:string,age:number}){
    return user.age
}

greetUser({firstName:"siva",lastName:"v",age:25});
console.log(logUser({firstName:"siva",lastName:"v",age:25}));


//with interface

// interface User {
//   firstName: string;
//   lastName: string;
//   middleName?: string;
//   age?: number;
// }

// function greetUser(user: User) {
//   return `Hello ${user.firstName} ${user.lastName}`;
// }

// function logUser(user: User) {
//   console.log(
//     `You're name: ${user.firstName} ${user.lastName}`
//   );
// }

// const user = { firstName: "Siva", lastName: "V" };

// console.log(greetUser(user));
// logUser(user);
