import { Routes } from '@angular/router';
import { Aufgabe1Component } from './aufgabe1/aufgabe1.component';
import { Aufgabe2Component } from './aufgabe2/aufgabe2.component';
import { Aufgabe3Component } from './aufgabe3/aufgabe3.component';
import { Aufgabe4Component } from './aufgabe4/aufgabe4.component';

export const routes: Routes = [
  {
    path: 'aufgabe1',
    component: Aufgabe1Component,
  },
  {
    path: 'aufgabe2',
    component: Aufgabe2Component,
  },
  {
    path: 'aufgabe3',
    component: Aufgabe3Component,
  },
  {
    path: 'aufgabe4',
    component: Aufgabe4Component,
  },
];
