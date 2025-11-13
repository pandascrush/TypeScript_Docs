var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = /** @class */ (function () {
    function person(firstName, lastName, age) {
        this.firsName = firstName,
            this.lastName = lastName,
            this.age = age;
    }
    person.prototype.greet = function () {
        return "Hello ".concat(this.firsName, " ").concat(this.lastName);
    };
    return person;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(firstName, lastName, age) {
        return _super.call(this, firstName, lastName, age) || this;
    }
    return User;
}(person));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(firstName, lastName, age, role) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.role = role;
        return _this;
    }
    Admin.prototype.greet = function () {
        return "Hai ".concat(this.role, " ").concat(this.firsName, " ").concat(this.lastName, " ");
    };
    return Admin;
}(person));
var user = new User("Siva", "V", 25);
var user1 = new Admin("Rahul", "V", 24, "Admin");
console.log(user.greet());
console.log(user1.greet());
