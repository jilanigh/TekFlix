import { Component } from '@angular/core';
import { Film, FILMS } from '../models/film';

@Component({
  selector: 'app-movie-list-component',
  standalone: false,
  templateUrl: './movie-list-component.component.html',
  styleUrl: './movie-list-component.component.css'
})
export class MovieListComponentComponent {
  films: Film[] = FILMS;
  categories: string[] = ['All','Action','Comedy','Adventure','Fantasy','Horror','Romance']
  selectdCategorie: string = 'All'
  filtreFilms?: Film[];

  selectedCategorie(cat : string){
    this.selectdCategorie= cat;
  }

  get filtredFilm(): Film[]{
    return this.selectdCategorie === 'All'
    ? this.films
    : this.films.filter(f=>f.genre === this.selectdCategorie);
  }
}
