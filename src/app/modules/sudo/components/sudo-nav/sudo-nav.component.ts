import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';

@Component({
  selector: 'app-sudo-nav',
  templateUrl: './sudo-nav.component.html',
  styleUrls: ['./sudo-nav.component.scss']
})
export class SudoNavComponent {

  constructor(
    private readonly authService: AuthService
  ) { }

  public logout() {
    this.authService.logout();
  }
}