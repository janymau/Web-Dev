import { Component } from '@angular/core';
import { Category, Product } from './models/product.model';
import { PRODUCTS_DATA } from './data/product.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shop-project';
  categories: Category[] =  PRODUCTS_DATA;
  selectedCategory? : Category;

  SelectCategory(category: Category){
    this.selectedCategory = category;
  }
  public sortTypes: string[] = ['Сначала дорогие', 'Сначала дешевые', 'Высокий рейтинг'];
  public sortType: string = 'Популярное';
  
  sortProducts() {
    switch (this.sortType) {
      case 'Сначала дорогие':
        this.selectedCategory?.products.sort((a, b) => b.price - a.price);
        break;
  
      case 'Сначала дешевые':
        this.selectedCategory?.products.sort((a, b) => a.price - b.price);
        break;
  
      case 'Высокий рейтинг':
        this.selectedCategory?.products.sort((a, b) => (b.rating) - (a.rating));
        break;
  
      default:
        break;
    }
  }

}
