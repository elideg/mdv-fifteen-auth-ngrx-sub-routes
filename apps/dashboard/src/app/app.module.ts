import { CoreStateModule } from './../../../../libs/core-state/src/lib/core-state.module';
import { UiLibModule } from './../../../../libs/ui-lib/src/lib/ui-lib.module';
import { CoreDataModule } from './../../../../libs/core-data/src/lib/core-data.module';
import { MaterialModule } from './../../../../libs/material/src/lib/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShoesComponent } from './shoes/shoes.component';
import { ShoesListComponent } from './shoes/shoes-list/shoes-list.component';
import { ShoesDetailsComponent } from './shoes/shoes-details/shoes-details.component';
import { ShoesItemComponent } from './shoes/shoes-item/shoes-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [AppComponent, ShoesComponent, ShoesListComponent, ShoesDetailsComponent, ShoesItemComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreDataModule,
    UiLibModule,
    CoreStateModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
