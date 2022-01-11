import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';
@Component({
    selector: 'app-sales-person-list',
    templateUrl: './sales-person-list.component.html',
    styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

    salesPersonList: SalesPerson[] = [
        new SalesPerson("Jack", "Doe", "someone@example.com", 1000),
        new SalesPerson("John", "Doe", "someone@example.com", 9843),
        new SalesPerson("Jane", "Doe", "someone@example.com", 43598),
        new SalesPerson("Dane", "Doe", "someone@example.com", 524),
        new SalesPerson("Tane", "Doe", "someone@example.com", 94587),
        new SalesPerson("Lame", "Doe", "someone@example.com", 149872),
        new SalesPerson("Fame", "Doe", "someone@example.com", 12394),
        new SalesPerson("Shame", "Doe", "someone@example.com", 544),
        new SalesPerson("Flame", "Doe", "someone@example.com", 549387),
        new SalesPerson("Game", "Doe", "someone@example.com", 985243),
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
