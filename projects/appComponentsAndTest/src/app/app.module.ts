import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';

import { MatSliderModule } from '@angular/material/slider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HoverChangeColorDirectiveDirective } from './hover-change-color/hover-change-color.directive';
import { DirectivesTestComponent } from './directives-test/directives-test.component';
import { MaterialTestComponent } from './material-test/material-test.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';

import { DynamicInputListComponent } from './dynamic-input-list/dynamic-input-list.component';
import { SchwarzTemplDrivenFormComponent } from './schwarz-templ-driven-form/schwarz-templ-driven-form.component';
import { TimeRangeSimpleComponent } from './time-range-simple/time-range-simple.component';
// import { ChrTimeFormatHhmmPipe } from './time-range-simple/chr-time-formatter.directive';
import { ChrTimeFormatterDirective } from './time-range-simple/directives/chr-time-formatter.directive';
import { ChrTimeOnlyDirective } from './time-range-simple/directives/chr-timeonly.directive';

import { TimeRangePlaygroundComponent } from './time-range-playground/time-range-playground.component';
import { TimeFieldComponent } from './time-field-component/time-field.component';
import { TimeFieldPlaygroundComponent } from './time-field-playground/time-field-playground.component';

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
    // ChrTimeFormatHhmmPipe,
    ChrTimeFormatterDirective,
    ChrTimeOnlyDirective,
    TimeRangePlaygroundComponent,
    TimeFieldComponent,
    TimeFieldPlaygroundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatSliderModule,
    MatCardModule,
    MatToolbarModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSlideToggleModule,
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
