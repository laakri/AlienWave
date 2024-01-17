import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-new-compte',
  templateUrl: './new-compte.component.html',
  styleUrls: ['./new-compte.component.css'],
})
export class NewCompteComponent {
  constructor(private AuthService: AuthService) {}

  creerCompte(email: string, pass: string) {
    this.AuthService.createNewUser(email, pass);
  }
}
