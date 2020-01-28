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
      'Authorization': 'Bearer BQDI6ApWLZ_rs9PWPBj1iqd3heRKLaa044BVYcC5jGGEYSZkNPkdqFBT0PgekoBWxXNsuetoZ9dB1DZoJUU'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?country=CO&limit=20')
      .pipe(map(response => response['albums'].items));
  }

  getArtists(termino: string) {
    return this.getQuery(`search?q=${ termino }&type=artist`)
      .pipe(map(response => response['artists'].items));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${ id }`)
    // .pipe(map(response => {
    //   return response;
    // }));
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${ id }/top-tracks?country=CO`)
    .pipe(map(response => response['tracks']));
  }
}
