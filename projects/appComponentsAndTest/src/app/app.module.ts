import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { HoverChangeColorDirectiveDirective } from './hover-change-color-directive/hover-change-color-directive.directive';

const myProviders = [];

@NgModule({
  declarations: [AppComponent, HoverChangeColorDirectiveDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatSliderModule,
    MatCardModule,
    MatToolbarModule,
    MatDividerModule,
    MatButtonModule,
  ],
  providers: myProviders,
  bootstrap: [AppComponent],
})
export class AppModule {}

@NgModule({})
export class AppComponentsAndTestModule {
  static forRoot(): ModuleWithProviders<AppComponentsAndTestModule> {
    return {
      ngModule: AppModule,
      providers: myProviders,
    };
  }
}
