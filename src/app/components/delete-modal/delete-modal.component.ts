import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pizza } from 'src/app/services/pizzas/pizza.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss'],
})
export class DeleteModalComponent implements OnInit {

  constructor(
    private modalController: ModalController,
  ) { }

  @Input() pizza: Pizza;
  
  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss();
}
}
