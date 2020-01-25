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
      'Authorization': 'Bearer BQCUw51En7QN8EPEPR2w_KaCaFep7dVpHi9fVoA2_GuzvQ8UYt0Bv-f1QOMxTC0qdvag6rqzMVO9FC4O8Yk'
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
