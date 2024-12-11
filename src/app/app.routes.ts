import { Routes } from '@angular/router';
import FormComponent from './cart/ui/form/form.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./products/features/product-shell/product.route'),
  },
  { path: 'cart',
    loadChildren: () => import('./cart/cart.routes') 
  },
  {
    path: 'form',
    component:FormComponent,
    title: 'formulary'
  },
  {
    path: '**',
    redirectTo: '',
  },
];
