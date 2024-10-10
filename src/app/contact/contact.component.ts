import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {
  userName: string = '';
  userMessage: string = '';

  sendMessage(): void {
    if (!this.userName || !this.userMessage) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Information',
        text: 'Please fill out all fields before sending your message.',
        confirmButtonText: 'Okay'
      });
      return; 
    }

    Swal.fire({
      icon: 'success',
      title: 'Message Sent!',
      text: `Thank you, ${this.userName}! Your message has been sent.`,
      confirmButtonText: 'Okay'
    });

    this.userName = '';
    this.userMessage = '';
  }
}
