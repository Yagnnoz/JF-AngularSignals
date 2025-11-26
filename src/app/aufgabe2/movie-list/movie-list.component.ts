import { Component, computed, inject, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { MovieComponent } from '../movie/movie.component';

@Component({
  selector: 'app-movie-list',
  imports: [
    MovieComponent
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent implements OnInit {

  movieService = inject(MoviesService);

  movieList = this.movieService.allMovies;
  moviesSorted = computed(() => {
    return this.movieList().sort((a, b) => a.episode_id - b.episode_id);
  })

  ngOnInit() {
    this.movieService.loadMovies();
  }

  protected removeMovieFromList(episodeId: number) {
    this.movieService.removeMovie(episodeId);
  }
}
