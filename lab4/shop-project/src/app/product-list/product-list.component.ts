import { Component } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Input } from '@angular/core';
import { Category } from '../models/product.model';
import { Product } from '../models/product.model';
@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() selectedCategory! : Category;

  removeProduct(product:Product){
    this.selectedCategory.products = this.selectedCategory.products.filter(p => p !== product);
  }
}
