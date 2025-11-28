import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterResult, MovieResult, Wrapper } from './model/api.type';

@Injectable({
  providedIn: 'root',
})
export class StarWarsDataService {

  private httpClient = inject(HttpClient);
  private api = 'https://swapi.dev/api/';

  public getAllMovies(): Observable<Wrapper<MovieResult>> {
    return this.httpClient.get<Wrapper<MovieResult>>(`${this.api}/films`);
  }

  public getAllCharacters(): Observable<Wrapper<CharacterResult>> {
    return this.httpClient.get<Wrapper<CharacterResult>>(`${this.api}/people`);
  }

  public searchCharacter(searchName: string): Observable<Wrapper<CharacterResult>> {
    return this.httpClient.get<Wrapper<CharacterResult>>(`${this.api}/people/?search=${searchName}`);
  }
}
