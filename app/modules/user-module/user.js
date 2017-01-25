"use strict";
var Address = (function () {
    function Address() {
    }
    return Address;
}());
exports.Address = Address;
var User = (function () {
    function User() {
        this.address = new Address();
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map