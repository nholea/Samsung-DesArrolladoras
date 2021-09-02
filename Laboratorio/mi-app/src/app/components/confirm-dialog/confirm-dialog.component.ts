/*Diálogo confirmación eliminar contacto*/

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

//Contenido diálogo
export interface DialogData {
  title: string;
  message: string;
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css'],
})
export class ConfirmDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {}

  accept() {
    //Aceptar eliminar contacto
    this.dialogRef.close(true);
  }

  cancel() {
    //Denegar eliminar contacto
    this.dialogRef.close(false);
  }
}
