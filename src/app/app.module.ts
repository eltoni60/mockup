import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FoodButtonsComponent} from './food-buttons/food-buttons.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {NavHeaderComponent} from './nav-header/nav-header.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';
import {GridLayoutComponent} from './grid-layout/grid-layout.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {ReceiptListComponent} from './receipt-list/receipt-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    FoodButtonsComponent,
    NavHeaderComponent,
    GridLayoutComponent,
    ReceiptListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatTableModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
