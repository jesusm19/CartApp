import { HttpClient } from '@angular/common/http';
import { Injectable, Service } from '@angular/core';
import { Alumno } from '../models/alumno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

    private _abrirCerrarModal = false;

    private apiUrl = "http://localhost:8080/api/alumnos"

    constructor(private httpClient: HttpClient){}

    onAbrirCerrarModal(){
        this._abrirCerrarModal = !this._abrirCerrarModal;
    }

    get abrirCerrarModal(): boolean {
        return this._abrirCerrarModal;
    }

    getAlumnos():Observable<Alumno[]> {
        return this.httpClient.get<Alumno[]>(this.apiUrl);

    }

}
