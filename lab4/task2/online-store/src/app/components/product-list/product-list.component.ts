import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true,
  imports: [CommonModule, ProductCardComponent]
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 14',
      description: 'Apple iPhone 14 128Gb черный',
      price: 350000,
      rating: '⭐️⭐️⭐️⭐️⭐️',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb8/h19/86042949648414.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000'
    },
    {
      id: 2,
      name: 'Apple iPhone 14',
      description: 'Apple iPhone 14 128Gb бежевый',
      price: 350340,
      rating: '⭐️⭐️⭐️⭐️',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf8/h9e/86042950991902.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-bezhevyi-106363144/?c=750000000'
    },
    {
      id: 3,
      name: 'Смарт-часы YUNTEKO Gi20 47 мм цвет-розовый',
      description: 'Смарт-часы YUNTEKO Gi20 розовый',
      price: 15888,
      rating: '⭐️⭐️⭐️⭐️⭐️',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h49/h9a/84355202383902.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/yunteko-gi20-47-mm-rozovyi-rozovyi-114087319/?c=750000000'
    },
    {
      id: 4,
      name: 'Ноутбук Apple MacBook Air 13 2025',
      description: 'MacBook Air 13 2025 / 16 Гб / SSD 256 Гб / macOS / MW123',
      price: 524901,
      rating: '⭐️⭐️⭐️⭐️⭐️',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000'
    },
    {
      id: 5,
      name: 'Двойной аэрогриль Braun TD5030IBK черный',
      description: 'Аэрогриль BRAUN TD5030IBK - это устройство, которое сочетает в себе функции гриля и аэрогриля.',
      price: 129990,
      rating: '⭐️⭐️⭐️⭐️⭐️',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p06/p43/70762008.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/braun-td5030ibk-chernyi-147454291/?c=750000000'
    },
    {
      id: 6,
      name: 'Dyson Airwrap id HS08 601848-01 розовое золото стайлер розовый',
      description: 'Dyson Airwrap id HS08 601848-01 — универсальный стайлер для создания разнообразных укладок без перегрева, бережно воздействующий на волосы.',
      price: 259428,
      rating: '⭐️⭐️⭐️⭐️⭐️',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p32/pa2/65259706.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/dyson-airwrap-id-hs08-601848-01-rozovoe-zoloto-stailer-rozovyi-145797988/?c=750000000'
    },
    {
      id: 7,
      name: 'Стиральная машина Samsung WW60AK4S00CELT белый',
      description: 'Стиральная машина Samsung — эффективное решение для вашего дома, обеспечивающее высокое качество стирки и экономию ресурсов.',
      price: 167500,
      rating: '⭐️⭐️⭐️⭐️⭐️',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p24/p36/65659429.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/samsung-ww60ak4s00celt-belyi-145907861/?c=750000000'
    },
    {
      id: 8,
      name: 'Наушники Apple AirPods 4 белый',
      description: 'Обновленные беспроводные наушники Apple AirPods 4 с персонализированным пространственным аудио',
      price: 57975,
      rating: '⭐️⭐️⭐️⭐️⭐️',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000'
    },



  ];
}
