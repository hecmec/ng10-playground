import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectivesTestComponent } from './directives-test/directives-test.component';
import { DynamicInputListComponent } from './dynamic-input-list/dynamic-input-list.component';
import { MaterialTestComponent } from './material-test/material-test.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
