import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponentsAndTestModule } from '../../projects/appComponentsAndTest/src/app/app.module';
import { AppLazyWithoutRoutingModule } from '../../projects/AppLazyWithoutRouting/src/app/app.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppComponentsAndTestModule.forRoot(),
    AppLazyWithoutRoutingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
