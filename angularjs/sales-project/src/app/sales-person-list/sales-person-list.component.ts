import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
    selector: 'app-sales-person-list',
    templateUrl: './sales-person-list.component.html',
    styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

    salesPersonList: SalesPerson[] = [
        new SalesPerson("Prashant", "Shrestha", "ps@example.com", 1000),
        new SalesPerson("John", "Shrestha", "ps@example.com", 9843),
        new SalesPerson("Jane", "Shrestha", "ps@example.com", 43598),
        new SalesPerson("Dane", "Shrestha", "ps@example.com", 524),
        new SalesPerson("Tane", "Shrestha", "ps@example.com", 94587),
        new SalesPerson("Lame", "Shrestha", "ps@example.com", 149872),
        new SalesPerson("Fame", "Shrestha", "ps@example.com", 12394),
        new SalesPerson("Shame", "Shrestha", "ps@example.com", 544),
        new SalesPerson("Flame", "Shrestha", "ps@example.com", 549387),
        new SalesPerson("Game", "Shrestha", "ps@example.com", 985243),
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
