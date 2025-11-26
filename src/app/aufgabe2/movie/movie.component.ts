import { Component, input, output } from '@angular/core';
import { MovieResult } from '../../model/api.type';

@Component({
  selector: 'app-movie',
  imports: [],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss',
})
export class MovieComponent {

  movieData = input.required<MovieResult>();
  delete = output<number>();

  deleteMovie() {
    this.delete.emit(this.movieData().episode_id);
  }

}
