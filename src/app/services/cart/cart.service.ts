import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pizza } from '../pizzas/pizza.service';


@Injectable({
  providedIn: 'root'
})

export class CartItem {
  pizza: Pizza;
  qty: number;
}

export class CartService {

  private cartItemCount = new BehaviorSubject(0);

  constructor() { }

  getCart() {
    let cart: CartItem[] = JSON.parse(localStorage.getItem('cart'));
    if (!cart) {
      cart = [];
    }

    return cart;
  }

  getCartItemCount() {
    let cart = this.getCart();
    return cart;
  }

  addProduct(pizza: Pizza) {
    let cart = this.getCart();

    const index = cart.findIndex(x => x.pizza.id === pizza.id);

    if (index === -1) {
      cart.push({ pizza: pizza, qty: 1 });
    } else {
      cart[index].qty++;
    }

    this.saveCart(cart);

    return this.cartItemCount.next(this.cartItemCount.value + cart.length);
  }

  decreaseProduct(pizza: Pizza) {
    let cart = this.getCart();

    const index = cart.findIndex(x => x.pizza.id === pizza.id);

    if (cart[index].qty === 1) {
      cart.splice(index, 1);
    } else {
      cart[index].qty--;
    }

    this.saveCart(cart);
  }

  removeProduct(pizza: Pizza) {
    let cart = this.getCart();

    const index = cart.findIndex(x => x.pizza.id === pizza.id);
    cart.splice(index, 1);

    this.saveCart(cart);
  }

  removeAllProducts() {
    this.saveCart([]);
  }

  saveCart(cart: CartItem[]) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}