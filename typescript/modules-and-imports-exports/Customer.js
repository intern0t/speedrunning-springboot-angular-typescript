"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultCustomer = exports.Customer = void 0;
class Customer {
    constructor(_firstname, _lastname) {
        this._firstname = _firstname;
        this._lastname = _lastname;
    }
    get firstName() {
        return this._firstname;
    }
    get lastName() {
        return this._lastname;
    }
    set firstName(firstname) {
        this._firstname = firstname;
    }
    set lastName(lastname) {
        this._lastname = lastname;
    }
}
exports.Customer = Customer;
class DefaultCustomer {
    constructor(_firstname, _lastname) {
        this._firstname = _firstname;
        this._lastname = _lastname;
    }
    get firstName() {
        return this._firstname;
    }
    get lastName() {
        return this._lastname;
    }
    set firstName(firstname) {
        this._firstname = firstname;
    }
    set lastName(lastname) {
        this._lastname = lastname;
    }
}
exports.default = DefaultCustomer;
exports.DefaultCustomer = DefaultCustomer;
