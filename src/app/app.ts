import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Dashboard } from './pages/dashboard/dashboard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  template: ` <div class="px-8 md:px-16">
                <app-header></app-header>
                <router-outlet></router-outlet>
              </div>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
