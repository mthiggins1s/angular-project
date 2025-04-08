import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-songs',
  standalone: true,
  imports: [],
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.css'
})
export class SongsComponent {
  @Input({required: true}) cover!: string;
  @Input({required: true}) title!: string;

  get imagePath() {
    return 'assets/album-covers/' + this.cover;
  }

  onSongClick() {}
}
