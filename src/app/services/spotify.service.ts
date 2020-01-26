import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    this.getNewReleases();
  }

  private getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDVmFZBawVHAXKWrcIF3OCzww5K8bNJW8MnLBZdc84xSenjqPSCLyucSu1ScwDBNMolSKtBEGyBWhh4Bkk'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?country=CO&limit=20')
      .pipe(map(response => {
        return response['albums'].items;
      }));
  }

  getArtists(termino: string) {
    return this.getQuery(`search?q=${ termino }&type=artist`)
      .pipe(map(response => {
        return response['artists'].items;
      }));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${ id }`);
  }
}
