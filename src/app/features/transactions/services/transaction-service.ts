import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction-model';

@Injectable()
export class TransactionService {
  private txs: Transaction[] = [];

  getTransactions(): Transaction[] {
    return this.txs;
  }
  addTransaction(tx: Transaction) {
    tx.unitPrice = tx.totalPrice / tx.quantity;
    this.txs.push(tx);
  }
  getTransactionById(txId: number) {
    return this.txs.find((el) => el.id === txId);
  }
}
