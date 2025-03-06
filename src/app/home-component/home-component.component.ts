import { Component } from '@angular/core';
import { Film, FILMS } from '../models/film';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  standalone: false,
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {
  films: Film[] = FILMS;
constructor(private router: Router){}
goToMovieList(){
  this.router.navigate(['/movie-list']);
}


}
