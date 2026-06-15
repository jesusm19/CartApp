import { Component, signal } from '@angular/core';
import { AlumnosComponent } from "./alumnos/alumnos";
import { ModalMateriasComponent } from './modalMaterias/modalMaterias';
import { AlumnosService } from '../../services/alumnos';
import { Alumno } from '../../models/alumno';

@Component({
  standalone: true,
  selector: 'app-list-alumnos',
  imports: [AlumnosComponent, ModalMateriasComponent],
  templateUrl: './listAlumnos.html',
})
export class ListAlumnosComponent {

  isOpen!: boolean;
  listAlumnos = signal<Alumno[]>([]);

  constructor(private alumnosService: AlumnosService){}

  ngOnInit(){
    this.isOpen = this.alumnosService.abrirCerrarModal;
    this.alumnosService.getAlumnos().subscribe({
      next: (response) => {
        this.listAlumnos.set(response);
        console.log(this.listAlumnos())
      },
      error: (err) =>{
        console.error("Error al consumir el servicio")
      }
    });
  }

  abrirModal(){
    this.isOpen = this.alumnosService.abrirCerrarModal;
  }

  cerrarModal(){
    this.isOpen = this.alumnosService.abrirCerrarModal;
  }


}
