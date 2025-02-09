import { Routes } from '@angular/router';

import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';

export const routes: Routes = [
  {
    path: '',
    component: Component1Component,
  },
  {
    path: 'component2',
    component: Component2Component,
  },
  {
    path: 'component3',
    component: Component3Component,
  },
  {
    path: 'component1',
    redirectTo: '',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
