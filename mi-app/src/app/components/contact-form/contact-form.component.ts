import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  accion: string = 'añadir';
  posicion: any = 0;

  sexo = ['Hombre', 'Mujer', 'Otro', 'No especificado'];
  usuario: FormGroup;
  listaUsuarios: any[] = [];

  constructor(private fb: FormBuilder) {
    this.usuario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      edad: ['', [Validators.required, Validators.min(0), Validators.max(125)]],
      DNI: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(\d{8})([A-Z])$/), //expresión regular DNI
        ],
      ],
      cumple: [new Date(''), Validators.required],
      colorFav: ['', [Validators.required, Validators.minLength(3)]],
      sexo: ['', Validators.required],
    });
  }

  ngOnInit() {}

  get user() {
    //Escribir en template user en lugar de usuario.controls cuando vayamos a usar el control de los diferentes campos
    return this.usuario.controls;
  }

  addUser() {
    //Añadir usuario
    if (this.accion === 'añadir') {
      this.listaUsuarios.push(this.usuario.value);
    } else {
      this.listaUsuarios[this.posicion] = this.usuario.value;
      this.accion = 'añadir';
    }

    this.usuario.reset();
  }

  modificarUser(upPosition: number) {
    //Modificar usuario registrado
    this.usuario.patchValue(this.listaUsuarios[upPosition]);
    this.accion = 'modificar';
    this.posicion = upPosition;
  }

  borrarUser(delPosition: number) {
    //Eliminar usuario registrado
    this.listaUsuarios.splice(delPosition, 1);
  }

  reset() {
    //Borrar campos formulario
    this.usuario.reset();
  }
}
