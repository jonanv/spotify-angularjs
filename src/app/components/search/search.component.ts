import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Item } from '../../interfaces/album.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  itemsArtist: Item[] = [];

  constructor(public spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  search(termino: string) {
    const terminoLower = termino.toLowerCase();
    this.spotifyService.getArtist(terminoLower)
      .subscribe((response: Item[]) => {
        this.itemsArtist = response;
        console.log(this.itemsArtist);
      });
  }
}
