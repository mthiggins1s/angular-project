import { Component } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { SongsComponent } from "./songs/songs.component";
import { SONG_LIST } from "./songs-list";
import { WindowComponent } from "./window/window.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, SongsComponent, WindowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  songs = SONG_LIST;
  selectedSongId = 'u1';

  get selectedSong() {
    return this.songs.find((song) => song.id === this.selectedSongId)!;
  }

  onSelectSong(id: string) {
    this.selectedSongId = id;
    // we pass ($event) to the html: it holds that data/value that was emitted by the event we are listening to.
  }
}
