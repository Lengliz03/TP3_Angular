import { Component, OnInit } from '@angular/core';
import { Cat } from '../cat';
import { ActivatedRoute, Router } from '@angular/router';
import { CATS } from '../​mock-cats';
import * as _ from 'lodash';


@Component({
  selector: 'app-cat-modif',
  templateUrl: './cat-modif.component.html',
  styleUrls: ['./cat-modif.component.css']
})


export class CatModifComponent implements OnInit {
  
  cat!: Cat;
  cats = CATS;
  
  
  
  constructor(
     private route: ActivatedRoute,
     
    private router: Router
  ) {}

  

  
  getCatById(id:number){
    let index = _.findIndex (this.cats, (c: Cat) => {
    return c.id === id
      });
     this.cat = this.cats[index];
    console.log(this.cat);
      
  }
  
  ngOnInit(){
    const idFromRoute = +this.route.snapshot.paramMap.get('id')!;
    this.getCatById(idFromRoute);
  }

  

  modifyCat(): void {
    this.cat.updateCat(this.cat) ;{
      console.log('Cat updated:', this.cat);
    
      this.router.navigate(['/details', this.cat.id]);
    };
  }



  

}

