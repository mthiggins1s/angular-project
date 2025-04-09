import { Component, input } from '@angular/core';

@Component({
  selector: 'app-window',
  standalone: true,
  imports: [],
  templateUrl: './window.component.html',
  styleUrl: './window.component.css'
})
export class WindowComponent {
  title = input.required<string>();
}
