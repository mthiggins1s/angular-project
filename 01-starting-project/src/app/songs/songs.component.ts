import { Component, computed, Input, input } from '@angular/core';


@Component({
  selector: 'app-songs',
  standalone: true,
  imports: [],
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.css'
})
export class SongsComponent {
  // using signal inputs
  cover = input.required<string>();
  title = input.required<string>();

  imagePath = computed(() => {
    return 'assets/album-covers/' + this.cover();
  });

  onSongClick() {}
}
