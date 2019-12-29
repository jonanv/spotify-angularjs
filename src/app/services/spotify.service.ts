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

  private getHeaders() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDVjEHQtilwMSGIu2nxuUUv-Zk8rxNUOLQCc1je-IgCNism_p42_A6ZKOow4neFaoOcF8Lpsh70x1tkga0'
    });
    return headers;
  }

  getNewReleases() {
    const headers = this.getHeaders();

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?country=CO&limit=20', { headers })
      .pipe(map(response => {
        return response['albums'].items;
      }));
  }

  getArtist(termino: string) {
    const headers = this.getHeaders();

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist`, { headers })
      .pipe(map(response => {
        return response['artists'].items;
      }));
  }
}
