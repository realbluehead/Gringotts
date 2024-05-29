import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AssetCategoryService } from '../../transactions/services/category-service';
import { TreeModule } from '@ali-hm/angular-tree-component';
import { ASSET_CATEGORIES } from '../../../shared/mocks/mocked-data';
import { AssetCategory } from '../../transactions/models/transaction-model';

@Component({
  selector: 'gr-asset-classes-page',
  standalone: true,
  templateUrl: './asset-classes.page.html',
  styleUrls: ['./asset-classes.page.css'],
  providers: [AssetCategoryService],
  imports: [CommonModule, TreeModule],
})
export class AssetClassesPage implements OnInit {
  nodes: any = [];
  ngOnInit(): void {
    this.createTree(ASSET_CATEGORIES);
  }

  private createTree(cats: AssetCategory[]) {
    let nodes = ASSET_CATEGORIES.filter((cat) => cat.parent === undefined);
    nodes.forEach((rootCat: AssetCategory) => {
      let node = {
        name: rootCat.name,
        children: this.getChildrenNodes(rootCat),
      };
      this.nodes.push(node);
    });
  }

  private getChildrenNodes(cat: AssetCategory) {
    let children = ASSET_CATEGORIES.filter((cate) => cate.parent === cat.id);
    let childrenNodes: any = [];
    children.forEach((cat: AssetCategory) => {
      let node = {
        name: cat.name,
        children: this.getChildrenNodes(cat),
      };
      childrenNodes.push(node);
    });
    return childrenNodes;
  }
}
