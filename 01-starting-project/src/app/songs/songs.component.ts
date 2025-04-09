import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';


@Component({
  selector: 'app-songs',
  standalone: true,
  imports: [],
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.css'
})
export class SongsComponent {
  // using signal inputs
  id = input.required<string>();
  cover = input.required<string>();
  title = input.required<string>();
  // stores an event emitter
  select = output<string>();


  imagePath = computed(() => {
    return 'assets/album-covers/' + this.cover();
  });

  onSongClick() {
    this.select.emit(this.id());
  }
}
