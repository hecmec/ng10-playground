import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatSliderModule } from '@angular/material/slider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { HoverChangeColorDirectiveDirective } from './hover-change-color/hover-change-color.directive';
import { DirectivesTestComponent } from './directives-test/directives-test.component';
import { MaterialTestComponent } from './material-test/material-test.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';

import { from } from 'rxjs';
import { DynamicInputListComponent } from './dynamic-input-list/dynamic-input-list.component';
import { SchwarzTemplDrivenFormComponent } from './schwarz-templ-driven-form/schwarz-templ-driven-form.component';
import { TimeRangeSimpleComponent } from './time-range-simple/time-range-simple.component';
import { ChrTime } from './time-range-simple/chr-time.class';

const myProviders = [];

@NgModule({
  declarations: [
    AppComponent,
    HoverChangeColorDirectiveDirective,
    DirectivesTestComponent,
    MaterialTestComponent,
    SimpleTableComponent,
    DynamicInputListComponent,
    SchwarzTemplDrivenFormComponent,
    TimeRangeSimpleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
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
