import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

const routes: Routes = [
  { path: 'contactos', component: ContactListComponent },
  { path: 'nuevo-contacto', component: ContactFormComponent },
  { path: 'editar-contacto/:id', component: ContactFormComponent },
  { path: '', redirectTo: '/contactos', pathMatch: 'full' },
  { path: '**', redirectTo: '/contactos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
