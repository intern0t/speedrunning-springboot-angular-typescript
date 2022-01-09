// Constructor(s), Getters/Setters.

class Bruh {
    // Members (props)
    name: string;
    // Constructors
    constructor(bruhs_name: string) {
        this.name = bruhs_name; // this is necessary.
    }
    // Getters/setters
}

/*
    Access Modifiers
        - public: accessible to all classes (default)
        - private: accessible in current class only.
        - protected: accessible in current class & subclasses
*/
class SuperBruh {
    // Members (props)
    private _name: string;
    // Constructors
    constructor(bruhs_name: string) {
        this._name = bruhs_name; // this is necessary.
    }
    // Getters/setters (Accessors & something) - ES5+
    getNameOfBruh(): string {
        return this._name;
    }

    get getName(): string {
        return this._name;
    }

    set setName(bruhs_new_name: string) {
        this._name = bruhs_new_name;
    }
}

class UberBruh {
    // Members (props)
    // Constructors
    constructor(private _name: string) {
        // Defines & assigns at the same time. This is pretty cool.
    }
    // Getters/setters (Accessors & something) - ES5+
    getNameOfBruh(): string {
        return this._name;
    }

    get getName(): string {
        return this._name;
    }

    set setName(bruhs_new_name: string) {
        this._name = bruhs_new_name;
    }
}


let bruh: Bruh = new Bruh("Prashant");
console.log(bruh.name);

let super_brah: SuperBruh = new SuperBruh("Super Prashant");
// Runs into error if -> super_brah.name = "Something";
// Also runs into error if -> clg(super_brah.name);
console.log(super_brah.getNameOfBruh());
super_brah.setName = "Super Prashant Brah";
console.log(super_brah.getNameOfBruh());