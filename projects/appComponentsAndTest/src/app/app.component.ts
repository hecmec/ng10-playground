import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'appComponentsAndTest';

  getCoucou() {
    console.debug('getCoucou()');
    return 'coucou Ludwig: I am the app component in appComponentsAndTest';
  }
}
