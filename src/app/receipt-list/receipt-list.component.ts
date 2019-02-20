import {Component, OnInit} from '@angular/core';
import {Entree, ITEM} from '../menu-item';
import {ENTREES} from '../mock-entrees';

@Component({
  selector: 'app-receipt-list',
  templateUrl: './receipt-list.component.html',
  styleUrls: ['./receipt-list.component.css']
})
export class ReceiptListComponent implements OnInit {


  displayedColumns = ['item', 'cost'];
  order: ITEM[] = [
    {item: ENTREES[0].name, cost: ENTREES[0].cost},
    {item: ENTREES[0].name, cost: ENTREES[0].cost},
    {item: ENTREES[2].name, cost: ENTREES[2].cost}
  ];

  getTotalCost() {
    return this.order.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
  constructor() {
  }

  ngOnInit() {
  }

}
