import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/transactions' },
  { path: 'transactions', loadChildren: () => import('./features/transactions/transactions.routes').then(m => m.TRANSACTION_ROUTES) }
];
