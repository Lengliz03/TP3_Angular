

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Cat {
    id!:number;
    name!: string;
    breed!: string;
    country!: string;
  

  updateCat(cat:Cat){
    cat.name=this.name;
    cat.breed=this.breed;
    cat.country=this.country;
  }

}
