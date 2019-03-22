import {Injectable} from '@angular/core';

import {ITEM} from './menu-item';
import {items} from './mock-entrees';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor() {
  }

  order: ITEM[] = [];

  add(entree: ITEM) {
    this.order.push(entree);
  }

  getItem(): Observable<ITEM[][]> {
    return of(items);
  }

  getOrder(): Observable<ITEM[]> {
    return of(this.order);
  }

  remove(entree: ITEM): void {
    const i = this.order.indexOf(entree);
    if (i > -1) {
      this.order.splice(i, 1);
    }
  }

  clear(): void {
    this.order.splice(0, this.order.length);
  }
}


// Need to change the way the menu items are being stored and where they are being stored
// This while make it easy to just iterate across the array of items
