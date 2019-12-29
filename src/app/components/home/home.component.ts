import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Item } from '../../interfaces/album.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  songs: Item[] = [];
  loading: boolean;

  constructor(private spotifyService: SpotifyService) {
    this.loading = true;

    this.spotifyService.getNewReleases()
      .subscribe((response: Item[]) => {
        this.songs = response;
        this.loading = false;
      });
  }

  ngOnInit() {
  }


}
