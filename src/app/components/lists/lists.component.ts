import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { WishlistService } from '../../services/wishlist.service';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @ViewChild(IonList) list: IonList;
  @Input() completed = true;

  constructor(public wishlistService: WishlistService,
              private router: Router,
              private alertController: AlertController) { }

  ngOnInit() {}

  selectedList(list: List){

    if (this.completed){
      this.router.navigateByUrl(`/tabs/tab2/add/${list.id}`);
    } else{
      this.router.navigateByUrl(`/tabs/tab1/add/${list.id}`);
    }

  }

  deleteList(list: List){

    this.wishlistService.deleteList(list);

  }

  async editList(list: List){

    const alert = await this.alertController.create({
      header: 'Edit List',
      inputs: [
        {
          name: 'title',
          type: 'text',
          value: list.title,
          placeholder: 'List name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.list.closeSlidingItems();
          }
        },
        {
          text: 'Update',
          handler: (data) => {

            if (data.title.length === 0){
              return;
            }
            list.title = data.title;
            this.wishlistService.saveInStorage();
            this.list.closeSlidingItems();
          }
        },
      ]
    });

    alert.present();

  }

}
