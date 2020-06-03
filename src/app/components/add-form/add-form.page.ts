import { Component, OnInit } from '@angular/core';
import { IngredientService, Ingredient } from '../../services/ingredients/ingredient.service';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Pizza, PizzaService } from 'src/app/services/pizzas/pizza.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.page.html',
  styleUrls: ['./add-form.page.scss'],
  providers: [IngredientService]

})
export class AddFormPage implements OnInit {

  pizzaId: string;
  pizza: Pizza;

  error: string;
  loading: boolean;
  ingredients: Ingredient[];
  ingredientsWrapper: { ingredient: Ingredient, isChecked: boolean }[] = [];

  constructor(
    private ingredientsService: IngredientService,
    private activatedRoute: ActivatedRoute,
    private route: ActivatedRoute,
    public loadingController: LoadingController,
    public modalController: ModalController,
    public router: Router,
    private pizzaService: PizzaService,
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.pizzaId = params.id;
    });
  }

  async ngOnInit() {
    this.loading = true;

    if (this.pizzaId === 'new') {
      this.pizza = new Pizza();
      this.pizza.ingredients = [];
    } else {
      this.pizza = await this.pizzaService.getPizza(this.pizzaId).toPromise();
    }

    this.ingredients = await this.ingredientsService.getIngredientList().toPromise();

    for (const item of this.ingredients) {
      this.ingredientsWrapper.push({ ingredient: item, isChecked: this.pizza.ingredients.findIndex(x => x === item.id) !== -1 ? true : false });
    }

    this.loading = false;
  }

  async save() {
    this.pizza.ingredients = [];
    for (const item of this.ingredientsWrapper) {
      if (item.isChecked) {
        this.pizza.ingredients.push(item.ingredient.id);
      }
    }

    if (this.pizzaId === 'new') {
      await this.pizzaService.addPizza(this.pizza).toPromise();
    } else {
      await this.pizzaService.updatePizza(this.pizza).toPromise();
    }
  }

}
