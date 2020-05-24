import { Component, OnInit, Input } from '@angular/core';
import { PizzaService, Pizza } from '../services/pizzas/pizza.service';
import { IngredientService, Ingredient } from '../services/ingredients/ingredient.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { DeleteModalComponent } from '../components/delete-modal/delete-modal.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
  providers: [PizzaService, IngredientService]
})
export class AdminPage implements OnInit {
  public admin: string;
  pizzaId: string;
  ingredientId: string;
  pizzas: Pizza[] = [];
  ingredients: Ingredient[];
  error: string;
  loading: boolean;
  @Input() pizza: Pizza;
  // ingredient: Ingredient["name"];

  constructor(
    private pizzaService: PizzaService,
    private ingredientsService: IngredientService,
    private activatedRoute: ActivatedRoute,
    public loadingController: LoadingController,
    public modalController: ModalController,
    public router: Router,
  ) {

    this.activatedRoute.params.subscribe((params) => {
      this.pizzaId = params.id;
      this.ingredientId = params.id;
    });
    // this.pizzas = pizzaService;
    this.error = '';
  }

  async presentModal(pizza: Pizza): Promise<void> {
    const modal = await this.modalController.create({
      component: DeleteModalComponent,
      componentProps: {
        "pizza": pizza,
      },
      cssClass: 'delete-modal'
      // componentProps: { accounts: this.accountList },
    });
    return await modal.present();

  }

  async ngOnInit() {
    this.admin = this.activatedRoute.snapshot.paramMap.get('id');

    this.loading = true;

    this.pizzas = await this.pizzaService.getPizzaList().toPromise();
    this.ingredients = await this.ingredientsService.getIngredientList().toPromise();

    this.loading = false;
  }

  editPizza(pizza: Pizza) {

    let pizzaStringify = JSON.stringify(pizza);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "pizza": pizzaStringify
      }
    };
    this.router.navigate(["/add-form"], navigationExtras);
  }

  addIngredient(ingredient: Ingredient) {
    console.log(ingredient);
    this.ingredientsService.addIngredient(ingredient);
  }

  deleteIngredient(ingredient: Ingredient) {
    this.ingredientsService.deleteIngredient(ingredient.id)
  }

}
