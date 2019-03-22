import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import {ITEM} from '../menu-item';
import {items} from '../mock-entrees';

@Component({
  selector: 'app-food-buttons',
  templateUrl: './food-buttons.component.html',
  styleUrls: ['./food-buttons.component.css'],
})
export class FoodButtonsComponent {
  static uielements: string[][] = [
    ['Pancakes', 'Waffle', 'B&E', 'Veggie Omelet'],
    ['Burgers', 'Cold Cut Sandwich', 'Soup', 'pizza'],
    ['T-Bone Dinner']
  ];
  orderItems: ITEM[][] = items;

  uicanvas = [];


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
