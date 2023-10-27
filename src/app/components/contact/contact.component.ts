import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactFormData } from 'src/app/models/contact-data.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @Output() contactEmitter = new EventEmitter<any>();
  contactForm!: FormGroup;
  contactMessage!: ContactFormData;

  constructor() {
    this.contactFormBuild();
  }

  contactFormBuild() {
    this.contactForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null, [Validators.required]),
    });
  }

  sendMessage() {
    this.contactMessage = {
      email: this.contactForm.value.email,
      message: this.contactForm.value.message,
    };

    this.contactEmitter.emit(this.contactMessage);

    this.contactForm.reset();
  }

  getErrorMessage(controlName: string) {
    switch (controlName) {
      case 'email':
        return 'Formato de Email inválido!';
      case 'required':
        return 'Campo Obrigatório';
      case 'minLength':
        return 'A mensagem deve conter mais de 10 caracteres';
      default:
        return '';
    }
  }
}
