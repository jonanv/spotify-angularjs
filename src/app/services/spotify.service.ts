import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AlbumResponse, Item, Albums } from '../interfaces/album.interface';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  album: AlbumResponse;
  songs: Item[] = [];

  constructor(private http: HttpClient) {
    this.getNewReleases();
  }

  private getHeaders() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA6slLwXbzwNkYd2D7pIltHSs3ftHhvPag3-5H5uJjC2ZO7WnfmZ-3XcF1Zxg47tFh2DZGQegFY5YgTaP0'
    });
    return headers;
  }

  getNewReleases() {
    const headers = this.getHeaders();

    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
      .subscribe((response: AlbumResponse) => {
        this.album = response;
        this.songs = response.albums.items;
        console.log(this.songs);
      });
  }
}
