import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-character-search',
  imports: [
    FormsModule
  ],
  templateUrl: './character-search.component.html',
  styleUrl: './character-search.component.scss',
})
export class CharacterSearchComponent {

  term = model<string>('')

}
