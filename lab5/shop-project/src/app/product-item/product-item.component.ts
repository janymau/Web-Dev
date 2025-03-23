import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  standalone: false,
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent{
  @Input() product!:Product;
  @Output() remove = new EventEmitter<Product>();
  @Output() elementId!:Number;

  constructor(private route: Router) {}

  navigateToDetails(price:number){
    this.route.navigate(['/detail', price])
  }   
  likeProduct(){
    this.product.likes++;
  }

  removeProduct(){
    this.remove.emit(this.product);
  }


}
