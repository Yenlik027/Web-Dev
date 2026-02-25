import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 17 Pro',
      description: '256GB, orange color',
      price: 840200,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000',
      likes: 0,
      categoryId: 1
    },
    {
      id: 2,
      name: 'Apple iPhone 16',
      description: '256GB, black color',
      price: 587499,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h52/h3f/87295472795678.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-256gb-chernyi-123728177/?c=750000000',
      likes: 0,
      categoryId: 1
    },
    {
      id: 3,
      name: 'Apple iPhone 17',
      description: '256GB, purple color',
      price: 594000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb8/p3b/64165135.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-256gb-fioletovyi-145466665/?c=750000000',
      likes: 0,
      categoryId: 1
    },
    {
      id: 4,
      name: 'Samsung Galaxy S25 Ultra',
      description: '512GB, light-blue color',
      price: 645451,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe4/p58/20117879.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-512-gb-goluboi-133434652/?c=750000000',
      likes: 0,
      categoryId: 1
    },
    {
      id: 5,
      name: 'Samsung Galaxy Z Fold4',
      description: '512GB, black color',
      price: 515517,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h43/h88/86042953973790.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-z-fold4-12-gb-512-gb-chernyi-106307198/?c=750000000',
      likes: 0,
      categoryId: 1
    },
    {
      id: 6,
      name: 'Apple MacBook Air 13 2025',
      description: '13.6", 16GB, SSD 256GB, dark-blue color',
      price: 523993,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000',
      likes: 0,
      categoryId: 2
    },
    {
      id: 7,
      name: 'Acer Gadget E10 ETBook',
      description: '14", 16GB, SSD 512GB, dark-gray color',
      price: 283900,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1e/h68/86642069504030.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/acer-gadget-e10-etbook-14-16-gb-ssd-512-gb-win-11-home-0167563995-121895857/?c=750000000',
      likes: 0,
      categoryId: 2
    },
    {
      id: 8,
      name: 'HYDRA Home H13',
      description: '14", 8GB, SSD 256GB, purple color',
      price: 99990,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pd9/p4e/35886719.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/hydra-home-h13-14-8-gb-ssd-256-gb-win-10-h13-131929760/?c=750000000',
      likes: 0,
      categoryId: 2
    },
    {
      id: 9,
      name: 'Apple MacBook Pro 16 2024',
      description: '16.2", 24GB, SSD 512GB, black color',
      price: 1322388,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa1/pce/15484955.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2024-16-2-24-gb-ssd-512-gb-macos-mx2x3-137245155/?c=750000000',
      likes: 0,
      categoryId: 2
    },
    {
      id: 10,
      name: 'Lenovo IdeaPad Slim 3 15AMN8',
      description: '15.6", 8GB, SSD 512GB, gray color',
      price: 248998,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p8c/pc2/10847918.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-slim-3-15amn8-15-6-8-gb-ssd-512-gb-win-11-82xq00lrrk-130761798/?c=750000000',
      likes: 0,
      categoryId: 2
    },
    {
      id: 11,
      name: 'Apple AirPods 3',
      description: 'With Lightning Charging Case, white color',
      price: 61990,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000',
      likes: 0,
      categoryId: 3
    },
    {
      id: 12,
      name: 'Logitech G Pro X2',
      description: 'Lightspeed, pink color',
      price: 104940,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h5f/84922093010974.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/naushniki-logitech-g-pro-x2-lightspeed-rozovyi-115918436/?c=750000000',
      likes: 0,
      categoryId: 3
    },
    {
      id: 13,
      name: 'Apple AirPods Max 2',
      description: 'blue color',
      price: 277302,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p96/p5e/3537740.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-2-sinii-128625122/?c=750000000',
      likes: 0,
      categoryId: 3
    },
    {
      id: 14,
      name: 'Huawei FreeClip',
      description: 'purple color',
      price: 179999,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h89/h0f/85254956482590.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/naushniki-huawei-freeclip-fioletovyi-116760058/?c=750000000',
      likes: 0,
      categoryId: 3
    },
    {
      id: 15,
      name: 'Marshall Major V',
      description: 'blue color',
      price: 48430,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p02/pd4/55370991.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/naushniki-marshall-major-v-sinii-143174695/?c=750000000',
      likes: 0,
      categoryId: 3
    },
    {
      id: 16,
      name: 'Samsung Galaxy Tab A9+',
      description: '11", 8GB, gray color',
      price: 179997,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0b/hc4/84390016516126.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-5g-11-djuim-8-gb-128-gb-serebristyi-114175605/?c=750000000',
      likes: 0,
      categoryId: 4
    },
    {
      id: 17,
      name: 'Huawei MatePad 2025 + GIFT',
      description: '11.5", 8GB, gray color',
      price: 164890,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe0/p39/77818269.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/huawei-matepad-11-5-2025-11-5-djuim-8-gb-128-gb-seryi-podarok-145940951/?c=750000000',
      likes: 0,
      categoryId: 4
    },
    {
      id: 18,
      name: 'G-VILL S10 Ultra Tab',
      description: '10.1", 32GB, black color',
      price: 39900,
      rating: 4.3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p80/pb0/25860494.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/g-vill-s10-ultra-tab-10-1-djuim-32-gb-512-gb-chernyi-135008041/?c=750000000',
      likes: 0,
      categoryId: 4
    },
    {
      id: 19,
      name: 'Apple iPad A16 11 2025',
      description: '11", 6GB, pink color',
      price: 204000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pce/p96/37011919.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-rozovyi-138199640/?c=750000000',
      likes: 0,
      categoryId: 4
    },
    {
      id: 20,
      name: 'Apple iPad Pro 11 2022 ',
      description: '11", 16GB, gray color',
      price: 755000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h62/h84/64897225883678.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-11-2022-wi-fi-11-djuim-16-gb-2048-gb-seryi-107277135/?c=750000000',
      likes: 0,
      categoryId: 4
    },





  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}
