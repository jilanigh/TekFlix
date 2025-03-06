import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { MovieListComponentComponent } from './movie-list-component/movie-list-component.component';
import { MovieDetailComponentComponent } from './movie-detail-component/movie-detail-component.component';
import { FavoritesComponentComponent } from './favorites-component/favorites-component.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    HomeComponentComponent,
    MovieListComponentComponent,
    MovieDetailComponentComponent,
    FavoritesComponentComponent,
    SearchComponentComponent,
    NotFoundComponent,
    SingleMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
