import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./cart.component'),
  },
  {
    path: 'form',
    loadComponent: () => import('./ui/form/form.component')
  }
] as Routes;
