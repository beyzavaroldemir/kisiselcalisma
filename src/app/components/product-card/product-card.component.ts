import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  dateNow: Date=new Date();
  @Input() product!: Product;
  @Output() onAddToCartClick=new EventEmitter<Product>();
//Output kullanımı event edilecek fonksiyon adı= eventemitter<Hangi ürün için tıklandığı(parametre tipi)
  //EventEmitter:Kullanıcıların aksiyon yaptıklarını bize bildiren çalıştıran yapılardır.
  //EX: Submit EventEmitter form submit olduğunda sağındaki fonk haberdar eder.
  addToCartClick(){
    //Parent Componenti uyar!
    //Event Emitterı'ı tirggerla
    //emit et
    this.onAddToCartClick.emit(this.product);
  }

}
