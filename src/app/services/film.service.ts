import { Injectable } from '@angular/core';
import { Film, FILMS } from '../models/film';

@Injectable({
  //injctabl a partirml root
  providedIn: 'root'
})
export class FilmService {
films : Film[] = FILMS;
  constructor() {}

  getAllFilms(){
    return FILMS;
  }

  getFilmById(id: number){
return this.films.find(f=>f.id===id);
  }
  
}
