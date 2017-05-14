import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    .toggle-text { color: white; }
  `]
})
export class AppComponent {
  toggle = true;
  toggleClicks = [];

  onToggle() {
    this.toggleClicks.push(this.toggleClicks.length + 1);
    this.toggle = !this.toggle;
  }
}
