import { Component, OnInit } from '@angular/core';
import { IngredientService, Ingredient } from 'src/app/services/ingredients/ingredient.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';

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

  constructor(
    private ingredientsService: IngredientService,
    private activatedRoute: ActivatedRoute,
    public loadingController: LoadingController,
    public modalController: ModalController,
  ) { 
    this.activatedRoute.params.subscribe((params) => {
      this.ingredientId = params.id;
    });
    this.error = '';
  }

  async ngOnInit() {

    this.loading = true;

    this.ingredients = await this.ingredientsService.getIngredientList().toPromise();

    console.log(this.ingredients)

    this.loading = false;
  }

}
