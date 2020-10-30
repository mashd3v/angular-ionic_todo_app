import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WishlistService } from '../../services/wishlist.service';
import { List } from '../../models/list.model';
import { ListItem } from '../../models/list-item.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  list: List;
  itemName = '';

  constructor(private wishlistService: WishlistService,
              private router: ActivatedRoute) {

    const listId = this.router.snapshot.paramMap.get('listId');
    this.list = this.wishlistService.getList(listId);

  }

  ngOnInit() {
  }

  addItem(){

    if (this.itemName.length === 0){
      return;
    }

    const newItem = new ListItem(this.itemName);
    this.list.items.push(newItem);
    this.itemName = '';
    this.wishlistService.saveInStorage();

  }

  changedCheck(item: ListItem){

    const toDo = this.list.items
                    .filter(itemData => !itemData.completed)
                    .length;

    if (toDo === 0){
      this.list.completedDate = new Date();
      this.list.completed = true;
    }else{
      this.list.completedDate = null;
      this.list.completed = false;
    }

    this.wishlistService.saveInStorage();

  }

  deleteItem(i: number){

    this.list.items.splice(i, 1);
    this.wishlistService.saveInStorage();

  }

}
