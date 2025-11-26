import { inject, Injectable, signal } from '@angular/core';
import { MovieResult } from '../model/api.type';
import { StarWarsDataService } from '../star-wars-data.service';
import { map, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {

  private movies = signal<MovieResult[]>([]);
  allMovies = this.movies.asReadonly();

  private dataService = inject(StarWarsDataService);

  loadMovies(): void {
    this.dataService.getAllMovies().pipe(
      take(1),
      map(movie => movie.results),
    ).subscribe(value => {
      this.movies.set(value);
    });
  }

  removeMovie(episodeId: number): void {
    this.movies.set(this.movies().filter(movie => movie.episode_id !== episodeId));
  }
}
