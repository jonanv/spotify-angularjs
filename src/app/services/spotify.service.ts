import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AlbumResponse, Item, Artist } from '../interfaces/album.interface';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  album: AlbumResponse;
  songs: Item[] = [];
  artistItems: Item[] = [];

  constructor(private http: HttpClient) {
    this.getNewReleases();
  }

  private getHeaders() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCqIz1--Dxlt58bX0BWHUEleVkLUIoWVUCfDy_kTEjLQvaM2pDctgECr8hImCUTX0zKCjPBi_1O8FzK73s'
    });
    return headers;
  }

  getNewReleases() {
    const headers = this.getHeaders();

    this.http.get('https://api.spotify.com/v1/browse/new-releases?country=CO&limit=20', { headers })
      .subscribe((response: AlbumResponse) => {
        this.album = response;
        this.songs = response.albums.items;
        console.log(this.songs);
      });
  }

  getArtist(termino: string) {
    const headers = this.getHeaders();

    this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`, { headers })
      .subscribe((response: any) => {
        this.artistItems = response.artists.items;
        console.log(this.artistItems);
      });
  }
}
