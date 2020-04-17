import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PizzaModalComponent } from '../pizza-modal/pizza-modal.component';

@Component({
    selector: 'app-pizza-card',
    templateUrl: './pizza-card.component.html',
    styleUrls: ['./pizza-card.component.scss'],
})
export class PizzaCardComponent implements OnInit {
    public folder: string;

    constructor(private activatedRoute: ActivatedRoute, public modalController: ModalController) { }

    async presentModal() {
        const modal = await this.modalController.create({
            component: PizzaModalComponent,
        });
        return await modal.present();
    }

    ngOnInit() {
        this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    }

    pizzaQty: number = 0;

    addPizza() {
        this.pizzaQty += 1;
    }

}
