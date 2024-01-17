// add-user.component.ts
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UserService } from '../../service/user.service'; // Update the path

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  formModel = {
    name: '',
    prenom: '',
    email: '',
    pass1: '',
    pass2: '',
  };

  constructor(
    private messageService: MessageService,
    private userService: UserService
  ) {}

  onSubmit() {
    if (this.isFormInvalid()) {
      console.log('Form is invalid. Please correct the errors.');
      this.messageService.add({
        severity: 'error',
        detail: 'Invalid Fields',
      });
    } else if (this.formModel.pass1 !== this.formModel.pass2) {
      console.log('Passwords do not match.');
      this.messageService.add({
        severity: 'error',
        detail: 'Passwords do not match.',
      });
    } else {
      this.userService.addUser(this.formModel);
      console.log('Form values:', this.formModel);
      console.log('Users in the service:', this.userService.getUsers());
    }
  }

  isFormInvalid() {
    return !(
      this.isValidField(this.formModel.name) &&
      this.isValidField(this.formModel.prenom) &&
      this.isValidField(this.formModel.email) &&
      this.isValidField(this.formModel.pass1) &&
      this.isValidField(this.formModel.pass2)
    );
  }

  isValidField(field: string): boolean {
    return field.trim() !== '';
  }
}
