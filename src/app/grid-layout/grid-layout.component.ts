import {Component, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {OrdersService} from '../orders.service';
import {ITEM} from '../menu-item';

@Component({
  selector: 'app-grid-layout',
  templateUrl: './grid-layout.component.html',
  styleUrls: ['./grid-layout.component.css']
})
export class GridLayoutComponent implements OnInit {
  foodItem: ITEM[][];
  links = ['Breakfast', 'Lunch', 'Dinner'];


  constructor(public orderService: OrdersService) {
  }

  addEntree(entree: ITEM): void {
    /*alert(entree.item);*/
    this.orderService.add(entree);
  }

  getItem(): void {
    this.orderService.getItem().subscribe(foodItem => this.foodItem = foodItem);
  }

  ngOnInit() {
    this.getItem();
  }

}
