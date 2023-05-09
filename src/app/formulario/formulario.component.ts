import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  formulario = new FormGroup({
    nombre: new FormControl('', Validators.required),
    correo: new FormControl('', [Validators.required, Validators.email]),
  });

  formularioEnviado = false;


  enviarFormulario() {
    if (this.formulario.valid) {
      // Envía el formulario
      this.formularioEnviado = true;
    }
  }

}
