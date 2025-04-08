import { Component } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { SongsComponent } from "./songs/songs.component";
import { SONG_LIST } from "./songs-list";
import { SongBoxComponent } from "./song-box/song-box.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, SongsComponent, SongBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  songs = SONG_LIST;
}
