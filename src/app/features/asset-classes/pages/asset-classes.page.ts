import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AssetCategoryService } from '../../transactions/services/category-service';

@Component({
  selector: 'gr-asset-classes-page',
  standalone: true,
  templateUrl: './asset-classes.page.html',
  styleUrls: ['./asset-classes.page.css'],
  providers: [AssetCategoryService],
  imports: [CommonModule],
})
export class AssetClassesPage implements OnInit {
  ngOnInit(): void {}
}
