import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MovieListComponentComponent } from './movie-list-component/movie-list-component.component';
import { MovieDetailComponentComponent } from './movie-detail-component/movie-detail-component.component';

const routes: Routes = [
  { path: '', component: HomeComponentComponent},
  { path: 'movie-list', component: MovieListComponentComponent},
  {path: 'movie-details/:id', component: MovieDetailComponentComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
