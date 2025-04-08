import { Component } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { SongsComponent } from "./songs/songs.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, SongsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
