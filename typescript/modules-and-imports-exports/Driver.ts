import { Customer } from './Customer';
import DefaultCustomer from "./Customer";

let customer1 = new DefaultCustomer("Prashant", "Shrestha");
let customer2 = new Customer("John", "Doe");
let customer3 = new Customer("Jane", "Doe");

console.log(customer1, customer2, customer3);
customer1.firstName = "Pras";
console.log(customer1, customer2, customer3);