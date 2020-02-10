import { AuthService } from '@mdv-fifteen/core-data';
import { Component } from '@angular/core';

@Component({
  selector: 'mdv-fifteen-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';

  links = [
    { path: '/shoes', icon: 'shoe', title: 'Shoes' }
  ]

  userIsAuthenticated$ = this.authService.isAuthenticated;
  constructor(private authService: AuthService) {}

}
