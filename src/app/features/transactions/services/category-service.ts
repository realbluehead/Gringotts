import { Injectable } from "@angular/core";
import { AssetCategory } from "../models/transaction-model";


@Injectable()
export class AssetCategoryService {
    private categories:AssetCategory[] = [
    ];

    getAssetCategories(): AssetCategory[] {
        return this.categories;
    }
    addCategory(category: AssetCategory) {
        category.full_path =  this.calculateFullPath(category);
        this.categories.push(category);
    }
    getCategoryById(id: number): AssetCategory | undefined {
        return this.categories.find(el=>el.id === id);
    }

    private calculateFullPath(cat:AssetCategory):string {
        if(cat.parent !==undefined) {
            let parentCat = this.getCategoryById(cat.parent);
            if (parentCat) return this.calculateFullPath(parentCat) + ' > '+ cat.name; else return '';
        } else return cat.name;
    }
}