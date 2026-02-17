import { Component, Input } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  standalone: true,
  imports: [CommonModule, DecimalPipe]
})
export class ProductCardComponent {
  @Input() product!: Product;


  shareWhatsApp() {
    const url = `https://wa.me/?text=${encodeURIComponent(
      'Check out this product: ' + this.product.link
    )}`;
    window.open(url, '_blank');
  }

  shareTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(
      this.product.link
    )}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }
}
