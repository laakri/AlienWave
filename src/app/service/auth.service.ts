import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth: boolean = false;

  constructor(private messageService: MessageService) {
    // Initialize Firebase if not already initialized
    const firebaseConfig = {
      apiKey: 'AIzaSyBs3Lb3-tFu4NQFwVJMhKL46tetpITiW9Q',
      authDomain: 'tp6-full.firebaseapp.com',
      projectId: 'tp6-full',
      storageBucket: 'tp6-full.appspot.com',
      messagingSenderId: '505848244781',
      appId: '1:505848244781:web:23bb46a62c3582f2c1a6a4',
      measurementId: 'G-P8N5TR5RTT',
    };

    const app = initializeApp(firebaseConfig);
  }

  createNewUser(email: string, password: string) {
    const auth = getAuth();

    return createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'User created successfully!',
        });
      })
      .catch((error: any) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error creating a new account:', errorCode, errorMessage);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: errorMessage,
        });
        throw error;
      });
  }

  loginUser(email: string, password: string) {
    const auth = getAuth();

    return signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Logged in successfully!',
        });
      })
      .catch((error: any) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error logging in:', errorCode, errorMessage);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: errorMessage,
        });
        throw error;
      });
  }
}
