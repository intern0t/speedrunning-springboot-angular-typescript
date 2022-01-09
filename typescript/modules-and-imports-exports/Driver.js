"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = require("./Customer");
const Customer_2 = __importDefault(require("./Customer"));
let customer1 = new Customer_2.default("Prashant", "Shrestha");
let customer2 = new Customer_1.Customer("John", "Doe");
let customer3 = new Customer_1.Customer("Jane", "Doe");
console.log(customer1, customer2, customer3);
customer1.firstName = "Pras";
console.log(customer1, customer2, customer3);
