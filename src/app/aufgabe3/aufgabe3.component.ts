import { Component, effect, inject, signal } from '@angular/core';
import { CharacterSearchComponent } from './character-search/character-search.component';
import { rxResource, toObservable, toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, map } from 'rxjs';
import { StarWarsDataService } from '../star-wars-data.service';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

@Component({
  selector: 'app-aufgabe3',
  imports: [
    CharacterSearchComponent,
    CharacterDetailComponent
  ],
  templateUrl: './aufgabe3.component.html',
  styleUrl: './aufgabe3.component.scss',
})
export class Aufgabe3Component {

  protected searchTerm = signal<string>('');
  logTermEffect = effect(() => {
    console.log(this.searchTerm())
  });
  protected searchTermDebounced = toSignal(toObservable(this.searchTerm).pipe(
    debounceTime(300),
  ));
  private dataService = inject(StarWarsDataService);


  protected character = rxResource({
    params: () => ({ searchTerm: this.searchTermDebounced() }),
    stream: ({ params }) => this.dataService.searchCharacter(params.searchTerm).pipe(
      map((data) => data.results),
    ),
    defaultValue: undefined,
  })
}
