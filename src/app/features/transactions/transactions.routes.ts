import { RouterModule, Routes } from '@angular/router';
import { TransactionsPage } from './pages/transactions.page';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: TransactionsPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TRANSACTION_ROUTES {}
