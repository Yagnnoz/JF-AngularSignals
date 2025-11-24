import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character, Movie } from './model/api.type';

@Injectable({
  providedIn: 'root',
})
export class StarWarsDataService {

  private httpClient = inject(HttpClient);
  private api = 'https://swapi.dev/api/';

  public getAllMovies(): Observable<Movie> {
    return this.httpClient.get<Movie>(`${this.api}/films`);
  }

  public getAllCharacters(): Observable<Character> {
    return this.httpClient.get<Character>(`${this.api}/people`);
  }

  public searchCharacter(searchName: string): Observable<Character> {
    return this.httpClient.get<Character>(`${this.api}/people/?search=${searchName}`);
  }
}
