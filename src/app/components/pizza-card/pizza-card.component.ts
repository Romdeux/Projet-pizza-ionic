import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PizzaModalComponent } from '../pizza-modal/pizza-modal.component';
import { PizzaService, Pizza } from '../../services/pizzas/pizza.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { CartModalPage } from '../cart-modal/cart-modal.page';

@Component({
    selector: 'app-pizza-card',
    templateUrl: './pizza-card.component.html',
    styleUrls: ['./pizza-card.component.scss'],
})
export class PizzaCardComponent implements OnInit {

    @Input() pizza: Pizza;
    @Input() showPizzaId: string;
    folder: string;
    cartItemCount: number;


    @ViewChild('cart', { static: false, read: ElementRef }) fab: ElementRef;


    constructor(private pizzaService: PizzaService,
        private cartService: CartService,
        private activatedRoute: ActivatedRoute, public modalController: ModalController) { }

    async presentModal(): Promise<void> {
        const modal = await this.modalController.create({
            component: PizzaModalComponent,
            swipeToClose: true,
            componentProps: {
                "pizza": this.pizza,
            }
            // componentProps: { accounts: this.accountList },
        });
        return await modal.present();
    }

    ngOnInit() {
        this.folder = this.activatedRoute.snapshot.paramMap.get('id');
        if (this.showPizzaId == this.pizza.id) {
            this.presentModal();
        }
    }

    addToCart(pizza: Pizza) {
        this.cartService.addProduct(pizza);
        // this.cartItemCount = this.cartService.getCartItemCount();

    }

}
