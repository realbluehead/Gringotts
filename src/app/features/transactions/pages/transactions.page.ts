import { Component, OnInit } from '@angular/core';
import { Transaction } from '../models/transaction-model';
import { CommonModule } from '@angular/common';
import { AssetCategoryService } from '../services/category-service';

import { ASSET_CATEGORIES, TRANSACTIONS } from '../mocks/mocked-data';
import { TransactionService } from '../services/transaction-service';

@Component({
  selector: 'gr-transactions-page',
  standalone: true,
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.css'],
  providers: [AssetCategoryService, TransactionService],
  imports: [CommonModule],
})
export class TransactionsPage implements OnInit {
  txData: Transaction[] = [];
  assetCategoriesMap: any = {};

  constructor(
    private assetCatService: AssetCategoryService,
    private txService: TransactionService
  ) {
    this.mockData();
    let categories = assetCatService.getAssetCategories();
    categories.forEach((cat) => {
      this.assetCategoriesMap[cat.id] = cat;
    });
  }

  ngOnInit() {}

  private mockData() {
    ASSET_CATEGORIES.forEach((cat) => this.assetCatService.addCategory(cat));
    TRANSACTIONS.forEach((tx) => this.txService.addTransaction(tx));
    this.txData = this.txService.getTransactions();
  }
}
