import { Injectable } from '@angular/core';
import { productsModel } from '../product.model'

@Injectable({
  providedIn: 'root'})
export class CartService {


  cartProduct: productsModel = [];
  total: number = 0

  constructor() { }
  add(id: string){
    console.log('Add product: '+id+' to cart');
    this.total += 1
  }
  getTotal(){
    return this.total;
  }

}
