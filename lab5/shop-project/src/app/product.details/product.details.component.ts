import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import { PRODUCTS_DATA } from '../data/product.data';

@Component({
  standalone: false,
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetail!: Product | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    setTimeout(() => {
      const productPrice = Number(this.route.snapshot.paramMap.get('price'));
  
      if (!isNaN(productPrice)) {
        const allProducts = PRODUCTS_DATA.flatMap(category => category.products);
        this.productDetail = allProducts.find(product => product.price === productPrice);
        console.log("Product found:", this.productDetail);
      }
    }, 500); // Даем немного времени на загрузку данных
  }
  
  
  
}
