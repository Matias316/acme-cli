import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  Song: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit(): void {
    this.loadSongs();
  }

    // Get songs list
    loadSongs() {
      return this.restApi.getSongs().subscribe((data: {}) => {
        this.Song = data;
      });
    }

    // Delete song
    deleteSong(id) {
      if (window.confirm('Are you sure, you want to delete?')){
        this.restApi.deleteSong(id).subscribe(data => {
          this.loadSongs();
        });
      }
    }
}
