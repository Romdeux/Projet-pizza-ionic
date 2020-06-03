import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pizza, PizzaService } from 'src/app/services/pizzas/pizza.service';
import { Ingredient, IngredientService } from 'src/app/services/ingredients/ingredient.service';
import { FolderPage } from 'src/app/folder/folder.page';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss'],
})
export class DeleteModalComponent implements OnInit {

  @Input() item: Pizza | Ingredient;
  @Input() isIngredient: boolean;



  constructor(
    private modalController: ModalController,
    private ingredientService: IngredientService,
    private pizzaService: PizzaService,
  ) { }

  ngOnInit() { }

  closeModal() {
    this.modalController.dismiss();
  }

  async delete() {
    if (this.isIngredient) {
      await this.ingredientService.deleteIngredient(this.item.id).toPromise();
    } else {
      await this.pizzaService.deletePizza(this.item.id).toPromise();
    }


    this.closeModal();
  }
}
