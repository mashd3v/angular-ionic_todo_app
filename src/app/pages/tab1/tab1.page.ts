import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public wishlistService: WishlistService,
              private router: Router,
              private alertController: AlertController) {}

  async addList(){

    const alert = await this.alertController.create({
      header: 'New List',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'List name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Create',
          handler: (data) => {

            if (data.title.length === 0){
              return;
            }
            const listId = this.wishlistService.createList(data.title);
            // Creating the list
            this.router.navigateByUrl(`/tabs/tab1/add/${listId}`);
          }
        },
      ]
    });

    alert.present();

  }


}
