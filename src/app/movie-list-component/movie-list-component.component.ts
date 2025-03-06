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

}
