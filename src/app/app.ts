import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from "./nav/nav";

@Component({
  selector: 'app-root',
  imports: [Nav, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('blog-frontend');
}
