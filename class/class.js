var User = /** @class */ (function () {
    function User(firstName, lastName, age) {
        if (age === void 0) { age = 23; }
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    User.prototype.greet = function () {
        console.log("Hai ".concat(this.firstName, " ").concat(this.lastName));
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    return User;
}());
var user1 = new User("Siva", "V");
var user2 = new User("Praveen", "J", 25);
user1.greet();
console.log(user1.getAge());
user2.greet();
console.log(user2.getAge());
