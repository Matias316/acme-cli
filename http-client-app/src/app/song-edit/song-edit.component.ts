import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-song-edit',
  templateUrl: './song-edit.component.html',
  styleUrls: ['./song-edit.component.css']
})
export class SongEditComponent implements OnInit {

  id = this.actRoute.snapshot.params.id;
  songData: any = {};

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit() {
    this.restApi.getSong(this.id).subscribe((data: {}) => {
      this.songData = data;
    });
  }

  // Update song data
  updateSong() {
    if (window.confirm('Are you sure, you want to update?')){
      this.restApi.updateSong(this.id, this.songData).subscribe(data => {
        this.router.navigate(['/songs-list']);
      });
    }
  }
}
