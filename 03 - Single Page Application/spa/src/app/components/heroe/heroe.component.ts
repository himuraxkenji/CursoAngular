import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe:Heroe;

  constructor(private activateRoute:ActivatedRoute,
              private heroService:HeroesService) {
    
      this.activateRoute.params.subscribe( params =>{
      console.log(params['id']);
      this.heroe = heroService.getHeroe(params['id']);
      
    });

   }

  ngOnInit() {
  }
  
}
