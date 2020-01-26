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
  loading: boolean;

  constructor(public spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  search(termino: string) {
    const terminoLower = termino.toLowerCase();
    this.loading = true;
    // TODO: solucionar bug para cuando se elimina texto de la busqueda

    this.spotifyService.getArtists(terminoLower)
      .subscribe((response: Item[]) => {
        this.itemsArtist = response;
        this.loading = false;
      });
  }
}
