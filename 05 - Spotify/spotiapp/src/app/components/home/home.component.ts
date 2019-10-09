import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  nuevasCanciones: any[] = [];
  loading:boolean;
  error:boolean ; 
  msgError:string ="";
  constructor(private spotify:SpotifyService) {
      
    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
    .subscribe( (resp:any) => {
      this.nuevasCanciones = resp;
      this.loading = false;
    }, (error) =>{
      this.loading = false;
      this.error = true;
      console.log(error);
      console.log(error);
      this.msgError = error.error.error.message;
    });;

   }

  ngOnInit() {
  }

}
