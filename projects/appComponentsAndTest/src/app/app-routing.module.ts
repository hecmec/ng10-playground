import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectivesTestComponent } from './directives-test/directives-test.component';
import { DynamicInputListComponent } from './dynamic-input-list/dynamic-input-list.component';
import { MaterialTestComponent } from './material-test/material-test.component';
import { SchwarzTemplDrivenFormComponent } from './schwarz-templ-driven-form/schwarz-templ-driven-form.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { TimeRangeSimpleComponent } from './time-range-simple/time-range-simple.component';

const routes: Routes = [
  {
    path: 'time-range-simple',
    component: TimeRangeSimpleComponent,
  },
  {
    path: 'material-test',
    component: MaterialTestComponent,
  },
  {
    path: 'directives-test',
    component: DirectivesTestComponent,
  },
  {
    path: 'simple-table',
    component: SimpleTableComponent,
  },
  {
    path: 'dynamic-input-list',
    component: DynamicInputListComponent,
  },
  {
    path: 'td-from',
    component: SchwarzTemplDrivenFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
