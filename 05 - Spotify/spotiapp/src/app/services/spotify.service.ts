import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor(private http:HttpClient) { }
  
  
 

  getNewReleases(){

    const headers  = new HttpHeaders({
      'Authorization':'Bearer BQB19oi1RIa8LYikLlmwsQLIFClmdo9T1ur3mf5uenVvJFCvobhPVMJMGIVyeg_0da537s6jBu9VFf2x7lA'
    }); 

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }


  getArtista(termino:string){
    const headers  = new HttpHeaders({
      'Authorization':'Bearer BQB19oi1RIa8LYikLlmwsQLIFClmdo9T1ur3mf5uenVvJFCvobhPVMJMGIVyeg_0da537s6jBu9VFf2x7lA'
    }); 

    return this.http.get(`https://api.spotify.com/v1/search?query=${termino}&type=artist&market=AR&offset=0&limit=15`, {headers});
  }
}
