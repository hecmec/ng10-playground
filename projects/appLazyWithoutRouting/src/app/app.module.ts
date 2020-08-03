import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

const myProviders = [];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule],
  providers: myProviders,
  bootstrap: [AppComponent],
})
export class AppModule {}

@NgModule({})
export class AppLazyWithoutRoutingModule {
  static forRoot(): ModuleWithProviders<AppLazyWithoutRoutingModule> {
    return {
      ngModule: AppModule,
      providers: myProviders,
    };
  }
}
