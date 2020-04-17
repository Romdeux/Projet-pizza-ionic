import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-modal-page',
    templateUrl: './pizza-modal.component.html',
    styleUrls: ['./pizza-modal.component.scss'],
})
export class PizzaModalComponent {

    constructor(
        private modalController: ModalController,
    ) {

    }

    pizzaQty: number = 0;

    addPizza() {
        this.pizzaQty += 1;
    }

    closeModal() {
        this.modalController.dismiss();
    }
}
