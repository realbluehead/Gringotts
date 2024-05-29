export interface Transaction {
  id: number;
  createdAt: string;
  date: string;
  type: TransactionType;
  quantity: number;
  assetCategoryId: number;
  totalPrice: number;
  unitPrice?: number;
}

export enum TransactionType {
  Buy = 'B',
  Sell = 'C',
}

export interface AssetCategory {
  id: number;
  name: string;
  description: string;
  icon: string;
  parent?: number;
  path?: string;
}
