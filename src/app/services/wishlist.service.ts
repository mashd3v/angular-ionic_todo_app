import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  lists: List[] = [];

  constructor() {

    this.loadFromStorage();

  }

  createList(title: string){

    const newList = new List(title);
    this.lists.push(newList);
    this.saveInStorage();
    return newList.id;

  }

  deleteList(list: List){

    this.lists = this.lists
        .filter(listData => listData.id !== list.id);
    this.saveInStorage();

  }

  getList(id: string | number){

    id = Number(id);

    return this.lists.find(listData => listData.id === id);

  }

  saveInStorage(){

    localStorage.setItem('data', JSON.stringify(this.lists));

  }

  loadFromStorage(){

    if (localStorage.getItem('data')){
      this.lists = JSON.parse(localStorage.getItem('data'));
    }else{
      this.lists = [];
    }

  }

}
