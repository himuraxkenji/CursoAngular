import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor(private http:HttpClient) { }
  
  
 getQuerry(querry:string){
     const url = `https://api.spotify.com/v1/${ querry }`;

     const headers  = new HttpHeaders({
      'Authorization':'Bearer BQAKebwJBBTeBjj43dNZezpvTLwIZCRc3fzqX1oKF54Ap0IEDkWbBxb_wnfokhaMN5sWO5T2QcjZlsrQzaQ'
    }); 

    return this.http.get(url,{headers});


 }

  getNewReleases(){
    
    return this.getQuerry('browse/new-releases?limit=20')
    .pipe( map(data => data['albums'].items ));
    // const headers  = new HttpHeaders({
    //   'Authorization':'Bearer BQAKebwJBBTeBjj43dNZezpvTLwIZCRc3fzqX1oKF54Ap0IEDkWbBxb_wnfokhaMN5sWO5T2QcjZlsrQzaQ'
    // }); 

    // return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
    // 
  }


  getArtista(termino:string){
    return this.getQuerry(`search?query=${termino}&type=artist&market=AR&offset=0&limit=15`)
    .pipe( map(data => data['artists'].items ));
  }
}
