import { Component, OnInit } from '@angular/core';
import { AssetCategory, Transaction } from '../models/transaction-model';
import { CommonModule } from '@angular/common';
import { AssetCategoryService } from '../services/category-service';

import { TransactionService } from '../services/transaction-service';
import {
  ASSET_CATEGORIES,
  TRANSACTIONS,
} from '../../../shared/mocks/mocked-data';

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
  showEdit = false;
  currentTx: Transaction | undefined;

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

  editTransaction(tx: Transaction) {
    this.currentTx = tx;
    this.showEdit = true;
  }

  private mockData() {
    ASSET_CATEGORIES.forEach((cat: AssetCategory) =>
      this.assetCatService.addCategory(cat)
    );
    TRANSACTIONS.forEach((tx: Transaction) =>
      this.txService.addTransaction(tx)
    );
    this.txData = this.txService.getTransactions();
  }
}
