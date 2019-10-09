import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
    
  artista: any = {};
  loading:boolean;
  topTracks:any[] = [];

  constructor(private router:ActivatedRoute,
              private spotify:SpotifyService) {
    this.loading=true;
    this.router.params.subscribe(params=>{
       this.getArtista(params['id']);
       this.getTopTrack(params['id']);
    })
   }

  ngOnInit() {
  }
  
  getArtista(id:string){
    this.loading=true;

    this.spotify.getArtista(id).subscribe((data:any)=>{
      this.artista = data;
      this.loading = false;
    }

    )
  }

  getTopTrack(id:string){
    this.spotify.getTopTracks(id).subscribe( data =>{
      console.log(data);
      this.topTracks = data;
    })
  }
}
