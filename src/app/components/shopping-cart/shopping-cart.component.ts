import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() { }

  closeModal() {
    this.modalController.dismiss();
  }

}
