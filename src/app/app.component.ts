import {Component} from '@angular/core';
import {CommonModule, NgPlural} from '@angular/common';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgPlural],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-i18n';
  tasksCount = 3;
  minutes = 0;
  gender = 'female';
  fly = true;
  logo = 'https://angular.io/assets/images/logos/angular/angular.png';

  inc(i: number) {
    this.minutes = Math.min(5, Math.max(0, this.minutes + i));
  }

  male() {
    this.gender = 'male';
  }

  female() {
    this.gender = 'female';
  }

  other() {
    this.gender = 'other';
  }
}
