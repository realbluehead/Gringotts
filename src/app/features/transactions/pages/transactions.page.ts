import { Component, OnInit } from '@angular/core';
import {
  AssetCategory,
  Transaction,
  TransactionType,
} from '../models/transaction-model';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { AssetCategoryService } from '../services/category-service';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'gr-transactions-page',
  standalone: true,
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.css'],
  providers: [AssetCategoryService],
  imports: [CommonModule, NzTableModule, NzFormModule, NzDividerModule],
})
export class TransactionsPage implements OnInit {
  txData: Transaction[] = [
    {
      id: 0,
      createdAt: Date(),
      date: Date(),
      type: TransactionType.Buy,
      quantity: 1,
      totalPrice: 130,
      assetCategoryId: 3,
    },
    {
      id: 1,
      createdAt: Date(),
      date: Date(),
      type: TransactionType.Buy,
      quantity: 3,
      totalPrice: 29.5,
      assetCategoryId: 5,
    },
    {
      id: 2,
      createdAt: Date(),
      date: Date(),
      type: TransactionType.Buy,
      quantity: 2,
      totalPrice: 135,
      assetCategoryId: 4,
    },
    {
      id: 3,
      createdAt: Date(),
      date: Date(),
      type: TransactionType.Buy,
      quantity: 5,
      totalPrice: 245,
      assetCategoryId: 9,
    },
    {
      id: 4,
      createdAt: Date(),
      date: Date(),
      type: TransactionType.Buy,
      quantity: 20,
      totalPrice: 32.5,
      assetCategoryId: 10,
    },
  ];
  assetCategoriesMap: any = {};

  constructor(private assetCatService: AssetCategoryService) {
    this.mockData();
    let categories = assetCatService.getAssetCategories();
    categories.forEach((cat) => {
      this.assetCategoriesMap[cat.id] = cat;
    });
  }

  ngOnInit() {}

  private mockData() {
    this.assetCatService.addCategory({
      id: 0,
      name: 'TCG',
      description: 'Trading Card Games',
      icon: '',
    });
    this.assetCatService.addCategory({
      id: 1,
      name: 'Pokemon',
      description: 'Pokemon TCG',
      icon: '',
      parent: 0,
    });
    this.assetCatService.addCategory({
      id: 2,
      name: 'One Piece',
      description: 'One Piece TCG',
      icon: '',
      parent: 0,
    });
    this.assetCatService.addCategory({
      id: 3,
      name: 'Lost Origin Booster Box',
      description: 'Pokemon TCG',
      icon: '',
      parent: 1,
    });
    this.assetCatService.addCategory({
      id: 4,
      name: 'Silver Tempest Booster Box',
      description: 'Pokemon TCG',
      icon: '',
      parent: 1,
    });
    this.assetCatService.addCategory({
      id: 5,
      name: 'Paldean Fates Booster Bundle',
      description: 'Pokemon TCG',
      icon: '',
      parent: 1,
    });
    this.assetCatService.addCategory({
      id: 6,
      name: 'Precious Metals',
      description: 'Precious Metals',
      icon: '',
    });
    this.assetCatService.addCategory({
      id: 7,
      name: 'Gold',
      description: 'Precious Metals',
      icon: '',
      parent: 6,
    });
    this.assetCatService.addCategory({
      id: 8,
      name: 'Silver',
      description: 'Precious Metals',
      icon: '',
      parent: 6,
    });
    this.assetCatService.addCategory({
      id: 9,
      name: '10oz bar',
      description: '10oz multi brand bar',
      icon: '',
      parent: 8,
    });
    this.assetCatService.addCategory({
      id: 10,
      name: '1oz coin',
      description: '1oz multi brand coin',
      icon: '',
      parent: 8,
    });
  }
}
