import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpressionComponent } from './components/expression/expression.component';
import { CapsuleListComponent } from './components/capsule-list/capsule-list.component';
import { CapsuleListItemComponent } from './components/capsule-list-item/capsule-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpressionComponent,
    CapsuleListComponent,
    CapsuleListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
