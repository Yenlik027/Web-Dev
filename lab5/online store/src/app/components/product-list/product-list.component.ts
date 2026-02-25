import { Component, Input } from '@angular/core';
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

  @Input() products: Product[] = [];

  removeProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}

