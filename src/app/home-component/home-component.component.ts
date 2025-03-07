import { Component } from '@angular/core';
import { Film, FILMS } from '../models/film';
import { Router } from '@angular/router';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-home-component',
  standalone: false,
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {
  // el ? ma3neha mouch initialiser
  films: Film[] = FILMS;
constructor(private router: Router,
  private filmService : FilmService
){}
goToMovieList(){
  this.router.navigate(['/movie-list']);
}

ngOnInit(){
  this.films = this.filmService.getAllFilms();
}

}
