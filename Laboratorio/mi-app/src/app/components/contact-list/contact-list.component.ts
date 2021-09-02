import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { NotificationService } from 'src/app/services/notification.service';
import { Persona } from 'src/app/models/persona';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  listaContactos: Persona[] = [];
  displayedColumns: string[] = [
    'nombre',
    'apellido',
    'edad',
    'DNI',
    'cumple',
    'colorFav',
    'sexo',
    'acciones',
  ];

  dataSource = new MatTableDataSource<Persona>(this.listaContactos);

  constructor(
    private personaService: PersonaService,
    private notification: NotificationService,
    public dialog: MatDialog
  ) {}

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnInit(): void {
    this.getContactos();
  }

  getContactos() {
    //Mostrar Lista Contactos
    this.personaService.getPersonas().subscribe(
      (data) => {
        console.log(data);
        this.dataSource = data;
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteContact(id: any) {
    //Eliminar contacto
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '500px',
      data: {
        title: '¡¡ATENCIÓN!!',
        message: 'Estás seguro de eliminar el contacto?',
      },
    });

    dialogRef.afterClosed().subscribe((accept: Boolean) => {
      if (accept) {
        this.personaService.deletePersona(id).subscribe(
          (data) => {
            this.notification.showWarning(
              'Contacto eliminado con éxito en Lista Contactos!!',
              'Contacto Eliminado!!'
            );
            this.getContactos();
            console.log();
          },
          (error) => {
            console.log(error);
          }
        );
      }
    });
  }
}
