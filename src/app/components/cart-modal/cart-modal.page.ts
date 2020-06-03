import { CartService, CartItem } from './../../services/cart/cart.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { Pizza } from 'src/app/services/pizzas/pizza.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {

  cart: CartItem[] = [];

  constructor(
    private cartService: CartService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
  ) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  decreaseCartItem(product: CartItem) {
    this.cartService.decreaseProduct(product.pizza);
    this.ngOnInit();
  }

  increaseCartItem(product: CartItem) {
    this.cartService.addProduct(product.pizza);
    this.ngOnInit();
  }

  removeCartItem(product: CartItem) {
    this.cartService.removeProduct(product.pizza);
    this.ngOnInit();
  }

  getTotal() {
    let total: number = 0;
    for (const item of this.cart) {
      total += item.pizza.prix * item.qty;
    }

    return total;
  }

  close() {
    this.modalCtrl.dismiss();
  }

  async checkout() {
    // Perfom PayPal or Stripe checkout process

    let alert = await this.alertCtrl.create({
      header: 'Thanks for your Order!',
      message: 'We will deliver your food as soon as possible',
      buttons: ['OK']
    });
    alert.present().then(() => {
      this.modalCtrl.dismiss();
    });
  }
}