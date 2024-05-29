import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/transactions' },
  {
    path: 'transactions',
    loadChildren: () =>
      import('./features/transactions/transactions.routes').then(
        (m) => m.TRANSACTION_ROUTES
      ),
  },
  {
    path: 'asset_classes',
    loadChildren: () =>
      import('./features/asset-classes/asset-classes.routes').then(
        (m) => m.ASSET_CLASSES_ROUTES
      ),
  },
];
