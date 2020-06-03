import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { ShoppingCartComponent } from '../components/shopping-cart/shopping-cart.component';
import { PizzaService, Pizza } from '../services/pizzas/pizza.service';

import { LoadingController } from '@ionic/angular';
import { CartService } from '../services/cart/cart.service';
import { CartModalPage } from '../components/cart-modal/cart-modal.page';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  providers: [PizzaService]
})
export class FolderPage implements OnInit {
  public folder: string;
  pizzas: Pizza[] = [];
  error: string;
  loading: boolean;
  pizzaId: string;

  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;
  getCartItemCount: number;

  @ViewChild('cart', { static: false, read: ElementRef }) fab: ElementRef;

  constructor(
    private pizzaService: PizzaService,
    private activatedRoute: ActivatedRoute,
    public loadingController: LoadingController,
    public modalController: ModalController,
    private cartService: CartService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.pizzaId = params.id;
    });
    // this.pizzas = pizzaService;
    this.error = '';
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ShoppingCartComponent,
    });
    return await modal.present();
  }

  public async ngOnInit() {

    this.cart = this.cartService.getCart();
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');

    this.loading = true;

    this.getCartItemCount = this.cartService.getCartItemCount().length;

    this.pizzas = await this.pizzaService.getPizzaList().toPromise();

    this.loading = false;

  }

  getCartItemNumber() {
    // this.cartItemCount = this.getCartItemCount;
  }

  async openCart() {
    this.animateCSS('bounceOutLeft', true);

    let modal = await this.modalController.create({
      component: CartModalPage,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {
      this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
      this.animateCSS('bounceInLeft');
    });
    modal.present();
  }

  animateCSS(animationName, keepAnimated = false) {
    const node = this.fab.nativeElement;
    node.classList.add('animated', animationName)

    //https://github.com/daneden/animate.css
    function handleAnimationEnd() {
      if (!keepAnimated) {
        node.classList.remove('animated', animationName);
      }
      node.removeEventListener('animationend', handleAnimationEnd)
    }
    node.addEventListener('animationend', handleAnimationEnd)
  }

}
