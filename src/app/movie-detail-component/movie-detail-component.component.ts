import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film, FILMS } from '../models/film';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-detail-component',
  standalone: false,
  templateUrl: './movie-detail-component.component.html',
  styleUrl: './movie-detail-component.component.css'
})
export class MovieDetailComponentComponent {
  filmId ?: any; // Variable pour stocker l'ID récupéré depuis la route
  films : Film[] = FILMS; // La liste des films
  film?: Film; // Variable de type Film pour stocker le film avec l'ID spécifié dans la route.
  safeTrailerUrl!: SafeResourceUrl;
  showModal = false;



  constructor(private route: ActivatedRoute ,private sanitizer: DomSanitizer) {} // Injection du service dans le constructeur

  ngOnInit() {
    console.log("INSIDE ngOnInit");
    this.filmId = this.route.snapshot.paramMap.get('id');
    console.log("FILM ID : ", this.filmId);
    console.log("FILMS : ", this.films);
    this.film = this.films.find(f => f.id === parseInt(this.filmId));
    console.log("Film ", this.film);
  }

  openModal() {
    if (this.film && this.film.trailerUrl) {
      const embedUrl = this.film.trailerUrl.replace("watch?v=", "embed/");
      this.safeTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
      this.showModal = true;
    }
  }
  
  closeModal() {
    this.showModal = false;
  }
  

}
