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

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQClGNSPQK_48iBBJx3flggdhQyfVQSiiA8sf-gnWJdugeqKhHdPi2_n-OLaMdbjiwpqlgiMZWKo8Lyz6SE'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?country=CO&limit=20')
      .pipe(map(response => {
        return response['albums'].items;
      }));
  }

  getArtist(termino: string) {
    return this.getQuery(`search?q=${ termino }&type=artist`)
      .pipe(map(response => {
        return response['artists'].items;
      }));
  }
}
