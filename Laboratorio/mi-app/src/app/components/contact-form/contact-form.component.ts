import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';
import { NotificationService } from 'src/app/services/notification.service';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  title = 'Nuevo Contacto';
  sexo = ['Hombre', 'Mujer', 'Otro', 'No especificado'];
  contactId: string | null;

  constructor(
    private fb: FormBuilder,
    private personaService: PersonaService,
    private notification: NotificationService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.contactForm = this.fb.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[A-ZÁÉÍÑÓÚÜ\s-/]+$/i),
          Validators.minLength(3),
        ],
      ],
      apellido: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[A-ZÁÉÍÑÓÚÜ\s-/]+$/i),
          Validators.minLength(3),
        ],
      ],
      edad: ['', [Validators.required, Validators.min(0), Validators.max(125)]],
      DNI: ['', [Validators.required, Validators.pattern(/^(\d{8})([A-Z])$/)]],
      cumple: [new Date(''), Validators.required],
      colorFav: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[A-ZÁÉÍÑÓÚÜ\s-/]+$/i),
          Validators.minLength(3),
        ],
      ],
      sexo: ['', Validators.required],
    });
    this.contactId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.editContact();
  }

  get contact() {
    //Escribir en template contact en lugar de contactForm.controls cuando vayamos a usar el control de los diferentes campos
    return this.contactForm.controls;
  }

  addContact() {
    const USUARIO: Persona = {
      nombre: this.contactForm.get('nombre')?.value,
      apellido: this.contactForm.get('apellido')?.value,
      edad: this.contactForm.get('edad')?.value,
      DNI: this.contactForm.get('DNI')?.value,
      cumple: this.contactForm.get('cumple')?.value,
      colorFav: this.contactForm.get('colorFav')?.value,
      sexo: this.contactForm.get('sexo')?.value,
    };

    if (this.contactId !== null) {
      //Editar contacto
      this.personaService.updatePersona(USUARIO, this.contactId).subscribe(
        (data) => {
          this.notification.showSuccess(
            'Contacto actualizado con éxito en Lista Contactos!!',
            'Contacto Actualizado!!'
          );
          this.router.navigate(['/usuarios']);
        },
        (error) => {
          console.log(error);
          this.resetForm();
        }
      );
    } else {
      //Añadir contacto
      this.personaService.createPersona(USUARIO).subscribe(
        (data) => {
          this.notification.showSuccess(
            `${USUARIO.nombre} añadido a Lista Contactos!!`,
            'Contacto Registrado!!'
          );
          this.router.navigate(['/usuarios']);
        },
        (error) => {
          console.log(error);
          this.resetForm();
        }
      );
    }
  }

  editContact() {
    //Mostrar datos contacto a editar
    if (this.contactId !== null) {
      this.title = 'Editar Contacto';
      this.personaService.getPersona(this.contactId).subscribe(
        (data) => {
          this.contactForm.setValue({
            nombre: data.nombre,
            apellido: data.apellido,
            edad: data.edad,
            DNI: data.DNI,
            cumple: data.cumple,
            colorFav: data.colorFav,
            sexo: data.sexo,
          });
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  resetForm() {
    //Borrar campos formulario
    this.contactForm.reset();
  }
}
