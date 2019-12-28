import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo!');
  }

  private getHeaders() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDzgvKBtKyZ-7artSAvCNUHfHpEZYNH5QfIIhfh6XGbwkZsFRJgx14gMWCuZK9-PUkI9RiszVv_VmFeSiY'
    });
    return headers;
  }

  getNewReleases() {
    const headers = this.getHeaders();
    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .subscribe((response) => {
        console.log(response);
      });
  }
}
