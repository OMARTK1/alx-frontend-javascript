"use strict";
exports.__esModule = true;
exports.StudentClass = void 0;
var teacher3 = {
    firstName: 'Med',
    fullTimeEmployee: false,
    lastName: 'Broth',
    location: 'Luxemburg',
    contract: false
};
var director1 = {
    firstName: 'Med',
    lastName: 'Broth',
    location: 'Luxemburg',
    fullTimeEmployee: true,
    numberOfReports: 17
};
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName);
};
exports.StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () { return 'Currently working'; };
    StudentClass.prototype.displayName = function () { return this.firstName; };
    return StudentClass;
}());
