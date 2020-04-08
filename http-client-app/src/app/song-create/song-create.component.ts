import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-song-create',
  templateUrl: './song-create.component.html',
  styleUrls: ['./song-create.component.css']
})
export class SongCreateComponent implements OnInit {

  @Input() songDetails = { title: '', duration: 0, owner: '' };

  constructor(
    public restApi: RestApiService,
    public router: Router
  ) { }

  ngOnInit() { }

  addSong() {
    this.restApi.createSong(this.songDetails).subscribe((data: {}) => {
      this.router.navigate(['/songs-list']);
    });
  }

}

