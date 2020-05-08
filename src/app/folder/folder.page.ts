import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { ShoppingCartComponent } from '../components/shopping-cart/shopping-cart.component';
import { PizzaService, Pizza } from '../services/pizzas/pizza.service';

import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  providers: [PizzaService]
})
export class FolderPage implements OnInit {
  public folder: string;
  pizzas: Pizza[] = [];
  error: string;
  loading: boolean;
  pizzaId: string;

  constructor(
    private pizzaService: PizzaService,
    private activatedRoute: ActivatedRoute,
    public loadingController: LoadingController,
    public modalController: ModalController,
    private http: HttpClient,
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.pizzaId = params.id;
    });
    // this.pizzas = pizzaService;
    this.error = '';
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ShoppingCartComponent,
    });
    return await modal.present();
  }

  async ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');

    this.loading = true;

    this.pizzas = await this.pizzaService.getPizzaList().toPromise();

    this.loading = false;

    // this.pizzaService.getPizzaList().subscribe(result => {
    //   this.pizzas = result;
    //   console.log(this.pizzas);
    // })
  }



  // async ionViewWillEnter() {
  //   // Present a loading controller until the data is loaded
  //   await this.presentLoading();
  //   // Load the data
  //   this.prepareDataRequest()
  //     .pipe(
  //       finalize(async () => {
  //         // Hide the loading spinner on success or error
  //         await this.loading.dismiss();
  //       })
  //     )
  //     .subscribe(
  //       data => {
  //         // Set the data to display in the template
  //         this.pizzas = data;
  //         console.log(data);
  //       },
  //       err => {
  //         // Set the error information to display in the template
  //         this.error = `An error occurred, the data could not be retrieved: Status: ${err.status}, Message: ${err.statusText}`;
  //       }
  //     );
  // }

  // async presentLoading() {
  //   // Prepare a loading controller
  //   this.loading = await this.loadingController.create({
  //     message: 'Loading...'
  //   });
  //   // Present the loading controller
  //   await this.loading.present();
  // }

  // private prepareDataRequest(): Observable<object> {
  //   // Define the data URL
  //   const dataUrl = 'https://api.ynov.jcatania.io/pizza';
  //   // Prepare the request
  //   return this.http.get(dataUrl);
  // }

}
