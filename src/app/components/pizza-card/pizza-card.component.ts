import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PizzaModalComponent } from '../pizza-modal/pizza-modal.component';
import { PizzaService, Pizza } from '../../services/pizzas/pizza.service';

@Component({
    selector: 'app-pizza-card',
    templateUrl: './pizza-card.component.html',
    styleUrls: ['./pizza-card.component.scss'],
})
export class PizzaCardComponent implements OnInit {

    @Input() pizza: Pizza;
    @Input() showPizzaId: string;
    folder: string;

    constructor(private pizzaService: PizzaService, private activatedRoute: ActivatedRoute, public modalController: ModalController) { }

    async presentModal(): Promise<void> {
        const modal = await this.modalController.create({
            component: PizzaModalComponent,
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

    pizzaQty: number = 0;

    addPizza() {
        this.pizzaQty += 1;
    }

}
