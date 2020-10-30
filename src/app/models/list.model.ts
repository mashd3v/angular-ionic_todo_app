import { ListItem } from './list-item.model';
export class List{

    id: number;
    title: string;
    creationDate: Date;
    completed: boolean;
    completedDate: Date;
    items: ListItem[];

    constructor(title: string){
        this.id = new Date().getTime();
        this.title = title;
        this.creationDate = new Date();
        this.completed = false;
        this.items = [];
    }

}
