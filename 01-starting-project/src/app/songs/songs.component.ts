import { Component } from '@angular/core';
import { SONG_LIST } from '../songs-list';

const randomIndex = Math.floor(Math.random() * SONG_LIST.length);

@Component({
  selector: 'app-songs',
  standalone: true,
  imports: [],
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.css'
})
export class SongsComponent {
  // variable with a value of a song being drawn randomly.
  selectedSong = SONG_LIST[randomIndex];
}
