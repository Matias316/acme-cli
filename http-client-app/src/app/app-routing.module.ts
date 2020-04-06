import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongCreateComponent } from './song-create/song-create.component'
import { SongEditComponent } from './song-edit/song-edit.component'
import { SongListComponent } from './song-list/song-list.component'


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: 'create-song', component: SongCreateComponent },
  { path: 'song-list', component: SongListComponent },
  { path: 'song-edit/:id', component: SongEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
