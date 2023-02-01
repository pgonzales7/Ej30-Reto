import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  constructor(private formbuilder: FormBuilder) { }

  registroform = this.formbuilder.group({
    nombre: ['', {
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25)]
    }],
    apellido: ['', {
      validators: [
        Validators.required,
        Validators.minLength(2)
      ]
    }],
    email: ["", {
      validators: [
        Validators.required,
        Validators.email,
      ]
    }],
    website: ["", {
      validators: [
        Validators.required
      ]
    }],

  })

  get nombre() { return this.registroform.get('nombre') }
  get apellido() { return this.registroform.get('apellido') }
  get email() { return this.registroform.get('email') }
  get website() { return this.registroform.get('website') }

  login() {

  }
}
