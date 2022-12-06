import { Pipe, PipeTransform } from '@angular/core';

import {Product} from './models/product';

@Pipe({
  name: 'filterProductByPrice'
})
export class FilterProductByPricePipe implements PipeTransform {

  transform (products: Product[], price:number, operator?:string): Product[] | undefined{

    let filterProductByPrice;
    if(operator==='gt'){
      filterProductByPrice= products.filter((p)=>p.unitPrice>(price))
    }
    if(operator==='lt'){
      filterProductByPrice=products.filter((p)=>p.unitPrice<(price))
    }
    if(operator=== 'gte'){
      filterProductByPrice=products.filter((p)=>p.unitPrice >=(price))

    }
    if(operator==='lte'){
      filterProductByPrice=products.filter((p)=>p.unitPrice<=(price))
    }
    if(operator==='eq')
    filterProductByPrice=products.filter((p)=>p.unitPrice=(price))

    return filterProductByPrice;
  }

}
