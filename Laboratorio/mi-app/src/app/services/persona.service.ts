/**HTTP: GET, GETBYID, POST, PUT , DELETE */

import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  urlAPI = 'http://localhost:3000/contacts/';

  constructor(private http: HttpClient) {}

  getPersonas(): Observable<any> {
    return this.http.get(this.urlAPI);
  }

  getPersona(id: string): Observable<any> {
    return this.http.get(this.urlAPI + id);
  }

  deletePersona(id: string): Observable<any> {
    return this.http.delete(this.urlAPI + id);
  }

  createPersona(persona: Persona): Observable<any> {
    return this.http.post(this.urlAPI, persona);
  }

  updatePersona(persona: Persona, id: any): Observable<any> {
    return this.http.put(this.urlAPI + id, persona);
  }
}
