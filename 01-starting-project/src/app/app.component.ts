import { Component } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { SongsComponent } from "./songs/songs.component";
import { SONG_LIST } from "./songs-list";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, SongsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  songs = SONG_LIST;
}
