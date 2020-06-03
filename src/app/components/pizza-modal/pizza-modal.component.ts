import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pizza } from 'src/app/services/pizzas/pizza.service';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
    selector: 'app-modal-page',
    templateUrl: './pizza-modal.component.html',
    styleUrls: ['./pizza-modal.component.scss'],
})
export class PizzaModalComponent {

    @Input() pizza: Pizza;

    @ViewChild('cart', { static: false, read: ElementRef }) fab: ElementRef;


    constructor(
        private modalController: ModalController,
        private cartService: CartService
    ) {

    }

    ngOnInit() {
    }

    addToCart(pizza: Pizza) {
        this.cartService.addProduct(pizza);
    }

    closeModal() {
        this.modalController.dismiss();
    }
}
