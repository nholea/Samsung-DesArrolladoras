import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { DateAdapter } from '@angular/material/core';
import { DateFormat } from './date-format';

@NgModule({
  declarations: [AppComponent, ContactFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ],
  providers: [
    { provide: DateAdapter, useClass: DateFormat }, // Para cambiar el formato de fecha Mat-Datepicker a DD / MM / YYYY
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private dateAdapter: DateAdapter<Date>) {
    dateAdapter.setLocale('en-in'); //dd/MM/yyyy
  }
}
