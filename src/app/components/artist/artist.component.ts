import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { Artist, Albums } from '../../interfaces/album.interface';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  topTracks: any[] = [];
  loading: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    public spotifyService: SpotifyService
  ) {
    this.activatedRoute.params
      .subscribe(params => {
        this.getArtist(params['id']);
        this.getTopTracks(params['id']);
      });
  }

  ngOnInit() {
  }

  getArtist(id: string) {
    this.loading = true;

    this.spotifyService.getArtist(id)
      .subscribe((response: any) => {
        this.artist = response;
        this.loading = false;
        console.log(response);
      });
  }

  getTopTracks(id: string) {
    this.loading = true;

    this.spotifyService.getTopTracks(id)
      .subscribe((response: any) => {
        this.topTracks = response;
        this.loading = false;
        console.log(response);
      });
  }
}
