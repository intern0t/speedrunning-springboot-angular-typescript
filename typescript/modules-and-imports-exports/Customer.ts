// export class Customer
class Customer {
    constructor(private _firstname: string, private _lastname: string) { }

    get firstName(): string {
        return this._firstname;
    }

    get lastName(): string {
        return this._lastname;
    }

    set firstName(firstname: string) {
        this._firstname = firstname;
    }

    set lastName(lastname: string) {
        this._lastname = lastname;
    }
}

export default class DefaultCustomer {
    constructor(private _firstname: string, private _lastname: string) { }

    get firstName(): string {
        return this._firstname;
    }

    get lastName(): string {
        return this._lastname;
    }

    set firstName(firstname: string) {
        this._firstname = firstname;
    }

    set lastName(lastname: string) {
        this._lastname = lastname;
    }
}

export {
    Customer,
    DefaultCustomer,
};