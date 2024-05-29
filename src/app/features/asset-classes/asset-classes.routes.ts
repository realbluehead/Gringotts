import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AssetClassesPage } from './pages/asset-classes.page';

const routes: Routes = [{ path: '', component: AssetClassesPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ASSET_CLASSES_ROUTES {}
