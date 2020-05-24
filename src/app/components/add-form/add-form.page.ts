import { Component, OnInit } from '@angular/core';
import { IngredientService, Ingredient } from 'src/app/services/ingredients/ingredient.service';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Pizza } from 'src/app/services/pizzas/pizza.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.page.html',
  styleUrls: ['./add-form.page.scss'],
  providers: [IngredientService]

})
export class AddFormPage implements OnInit {
  error: string;
  loading: boolean;
  ingredients: Ingredient[];
  ingredientId: string;

  pizza: Pizza;
  private flyingPizza: Observable<object>;

  constructor(
    private ingredientsService: IngredientService,
    private activatedRoute: ActivatedRoute,
    private route: ActivatedRoute,
    public loadingController: LoadingController,
    public modalController: ModalController,
    public router: Router,
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.ingredientId = params.id;
    });
    this.error = '';
  }

  async ngOnInit() {

    this.loading = true;

    this.ingredients = await this.ingredientsService.getIngredientList().toPromise();

    let pizzaSent = this.route.queryParams.subscribe(params => {
      this.pizza = JSON.parse(params["pizza"]);
    });

    console.log(this.pizza.ingredients);

    this.loading = false;
  }

}
