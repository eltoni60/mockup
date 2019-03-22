import {Component, OnInit, ViewChild} from '@angular/core';
import {ITEM} from '../menu-item';
import {MatTable} from '@angular/material';
import {OrdersService} from '../orders.service';

@Component({
  selector: 'app-receipt-list',
  templateUrl: './receipt-list.component.html',
  styleUrls: ['./receipt-list.component.css']
})

export class ReceiptListComponent implements OnInit {
  constructor(public orderService: OrdersService) {
  }

  displayedColumns = ['item', 'cost'];
  orders: ITEM[];

  getTotalCost() {
    return this.orders.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }

  ngOnInit() {
    this.orderService.getOrder().subscribe(list => this.orders = list);
  }

  deleteChecked(entree: ITEM): void {
    this.orderService.remove(entree);
  }

  clearOrder(): void {
    this.orderService.clear();
  }

  printOrder(): void {
    this.orderService.clear();
  }
}


