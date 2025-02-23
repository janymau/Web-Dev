import { Component } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-my-shop',
  standalone: false,
  templateUrl: './my-shop.component.html',
  styleUrl: './my-shop.component.css'
})
export class MyShopComponent {
  products: Product[] = [
    // {
    //   name: 'Apple iPhone 13 128Gb',
    //   description: 'Смартфон Apple iPhone 13 128Gb черный',
    //   price: 270254,
    //   rating: 4.32,
    //   img: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
    //   link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
    //   kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    // },
    // {
    //   name: 'Xiaomi Redmi 13C 8Gb 256Gb',
    //   description: 'Смартфон Xiaomi Redmi 13C 8Gb 256Gb черный',
    //   price: 109999,
    //   rating: 4.5,
    //   img: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium',
    //   link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000',
    //   kaspiLink: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000'
    // },
    // {
    //   name: 'Apple iPhone 16 Pro Max 256Gb черный',
    //   description: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный',
    //   price: 651455,
    //   rating: 4.8,
    //   img: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
    //   link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
    //   kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000'
    // },
    // {
    //   name: 'Apple iPhone 16 Pro Max 256Gb золотистый',
    //   description: 'Смартфон Apple iPhone 16 Pro Max 256Gb золотистый',
    //   price: 651470,
    //   rating: 4.8,
    //   img: 'https://resources.cdn-kaspi.kz/img/m/p/p6a/p66/19839126.jpg?format=gallery-medium',
    //   link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000',
    //   kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000'
    // },
    // {
    //   name: 'Apple iPhone 16 128Gb черный',
    //   description: 'Смартфон Apple iPhone 16 128Gb черный',
    //   price: 512345,
    //   rating: 4.7,
    //   img: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
    //   link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000',
    //   kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000'
    // },
    // {
    //   name: 'Apple iPhone 16 Pro 256Gb черный',
    //   description: 'Смартфон Apple iPhone 16 Pro 256Gb черный',
    //   price: 599999,
    //   rating: 4.9,
    //   img: 'https://resources.cdn-kaspi.kz/img/m/p/hbc/h31/87295483445278.png?format=gallery-medium',
    //   link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-256gb-chernyi-123887732/?c=750000000',
    //   kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-256gb-chernyi-123887732/?c=750000000'
    // },
    // {
    //   name: 'Apple iPhone 16 Pro Max 256Gb серебристый',
    //   description: 'Смартфон Apple iPhone 16 Pro Max 256Gb серебристый',
    //   price: 651470,
    //   rating: 4.8,
    //   img: 'https://resources.cdn-kaspi.kz/img/m/p/h74/ha7/87295492882462.png?format=gallery-medium',
    //   link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-serebristyi-123890752/?c=750000000',
    //   kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-serebristyi-123890752/?c=750000000'
    // },
    // {
    //   name: 'Samsung Galaxy S24 Ultra 5G 12Gb 256Gb черный',
    //   description: 'Смартфон Samsung Galaxy S24 Ultra 5G 12Gb 256Gb черный',
    //   price: 799999,
    //   rating: 4.9,
    //   img: 'https://resources.cdn-kaspi.kz/img/m/p/h4f/ha0/84952833687582.jpg?format=gallery-medium',
    //   link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-chernyi-116044354/?c=750000000',
    //   kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-chernyi-116044354/?c=750000000'
    // },
    // {
    //   name: 'Huawei Mate X6 12Gb 512Gb черный',
    //   description: 'Смартфон Huawei Mate X6 12Gb 512Gb черный',
    //   price: 899999,
    //   rating: 4.7,
    //   img: 'https://resources.cdn-kaspi.kz/img/m/p/p94/pc6/17926206.png?format=gallery-medium',
    //   link: 'https://kaspi.kz/shop/p/huawei-mate-x6-12-gb-512-gb-chernyi-132803055/?c=750000000',
    //   kaspiLink: 'https://kaspi.kz/shop/p/huawei-mate-x6-12-gb-512-gb-chernyi-132803055/?c=750000000'
    // },
    // {
    //   name: 'Huawei Mate X Ultimate 16Gb 1024Gb красный',
    //   description: 'Смартфон Huawei Mate X Ultimate 16Gb 1024Gb красный',
    //   price: 1123456,
    //   rating: 4.9,
    //   img: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p2a/17575214.jpeg?format=gallery-medium',
    //   link: 'https://kaspi.kz/shop/p/huawei-mate-xt-ultimate-16-gb-1024-gb-krasnyi-132696625/?c=750000000',
    //   kaspiLink: 'https://kaspi.kz/shop/p/huawei-mate-xt-ultimate-16-gb-1024-gb-krasnyi-132696625/?c=750000000'
    // }
  ];
  
  public sortTypes: string[] = ['Сначала дорогие', 'Сначала дешевые', 'Высокий рейтинг'];
public sortType: string = 'Популярное';

sortProducts() {
  switch (this.sortType) {
    case 'Сначала дорогие':
      this.products.sort((a, b) => b.price - a.price);
      break;

    case 'Сначала дешевые':
      this.products.sort((a, b) => a.price - b.price);
      break;

    case 'Высокий рейтинг':
      this.products.sort((a, b) => (b.rating) - (a.rating));
      break;

    default:
      break;
  }
}


}
  



