import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { DateAdapter } from '@angular/material/core';
import { DateFormat } from './date-format';
import { PersonaService } from './services/persona.service';
import { NotificationService } from './services/notification.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ContactListComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    { provide: DateAdapter, useClass: DateFormat }, // Para cambiar el formato de fecha Mat-Datepicker a DD / MM / YYYY
    PersonaService,//HTTP
    NotificationService,//Notificaciones Toastr
  ],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent],
})
export class AppModule {
  constructor(private dateAdapter: DateAdapter<Date>) {
    dateAdapter.setLocale('en-in'); //dd/MM/yyyy
  }
}
