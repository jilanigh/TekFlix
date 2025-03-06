import { Component, Input } from '@angular/core';
import { Film } from '../models/film';

@Component({
  selector: 'app-single-movie',
  standalone: false,
  templateUrl: './single-movie.component.html',
  styleUrl: './single-movie.component.css'
})
export class SingleMovieComponent {
  @Input() film!: Film;


}
