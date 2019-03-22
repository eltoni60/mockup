import {Entree} from './menu-item';
import {ITEM} from './menu-item';


export const ENTREES: Entree[] = [
  {entreeId: 1, name: 'Burger w/Fries', cost: 5.99, inventory: [['bun', 999], ['beef', 998], ['cheese', 997], ['fries', 996]]},
  {entreeId: 2, name: 'Fries', cost: 2.99, inventory: [['potato fries', 995]]},
  {entreeId: 3, name: 'Fountain Drink', cost: 0.98, inventory: [['liquid flavoring', 994], ['carbonation', 993]]}
];

export const items: ITEM[][] = [
  [
    {item: 'Pancakes', cost: 2.99},
    {item: 'Waffle', cost: 3.99},
    {item: 'B&E', cost: 5.99},
    {item: 'Veggie Omelet', cost: 5.49}
    ],
  [
    {item: 'Burgers', cost: 6.09},
    {item: 'Cold Cut Sandwich', cost: 4.49},
    {item: 'Soup', cost: 1.99},
    {item: 'Pasta', cost: 2.49}
    ],
  [
    {item: 'T-Bone Dinner', cost: 9.99}
    ]
];
