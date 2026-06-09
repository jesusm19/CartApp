import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartAppComponent } from "./components/cartApp/cartApp";

@Component({
  selector: 'app-root',
  imports: [CartAppComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CartApp');
}
