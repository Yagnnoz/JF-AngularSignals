import { Component, input } from '@angular/core';
import { CharacterResult } from '../../model/api.type';

@Component({
  selector: 'app-character-detail',
  imports: [],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.scss',
})
export class CharacterDetailComponent {

  characterData = input.required<CharacterResult>();

}
