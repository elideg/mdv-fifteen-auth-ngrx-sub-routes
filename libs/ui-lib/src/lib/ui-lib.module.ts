import { RoutingModule } from './../../../../apps/dashboard/src/app/routing.module';
import { MaterialModule } from './../../../material/src/lib/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginComponent } from './login/login.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  declarations: [ToolbarComponent, LoginComponent, WildcardComponent],
  exports: [ToolbarComponent, LoginComponent, WildcardComponent]
})
export class UiLibModule {}
