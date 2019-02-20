import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-food-buttons',
  templateUrl: './food-buttons.component.html',
  styleUrls: ['./food-buttons.component.css'],
})
export class FoodButtonsComponent {
  uielements = [
    'Burger w/ Fries',
    'Pancakes',
    'Chicken',
    'Soft Drink'
  ];

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
