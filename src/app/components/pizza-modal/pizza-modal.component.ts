import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pizza } from 'src/app/services/pizzas/pizza.service';

@Component({
    selector: 'app-modal-page',
    templateUrl: './pizza-modal.component.html',
    styleUrls: ['./pizza-modal.component.scss'],
})
export class PizzaModalComponent {

    @Input() pizza: Pizza;

    constructor(
        private modalController: ModalController,
    ) {

    }

    ngOnInit() {
        console.log(this.pizza);
    }

    pizzaQty: number = 0;

    addPizza() {
        this.pizzaQty += 1;
    }

    closeModal() {
        this.modalController.dismiss();
    }
}
