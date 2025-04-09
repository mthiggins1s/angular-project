import { Component, computed, EventEmitter, Input, input, Output } from '@angular/core';


@Component({
  selector: 'app-songs',
  standalone: true,
  imports: [],
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.css'
})
export class SongsComponent {
  // using signal inputs
  @Input({required: true}) id!: string;
  cover = input.required<string>();
  title = input.required<string>();
  @Output() select = new EventEmitter();

  imagePath = computed(() => {
    return 'assets/album-covers/' + this.cover();
  });

  onSongClick() {
    this.select.emit(this.id);
  }
}
