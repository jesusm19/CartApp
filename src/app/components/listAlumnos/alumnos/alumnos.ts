import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlumnosService } from '../../../services/alumnos';
import { Alumno } from '../../../models/alumno';

@Component({
  standalone: true,
  selector: 'app-alumnos',
  imports: [],
  templateUrl: './alumnos.html',
})
export class AlumnosComponent {

  @Output() abrirModalEventEmmitter: EventEmitter<void> = new EventEmitter();
  @Input({required:true})listAlumnos!: Alumno[];

  constructor(private alumnosService: AlumnosService){
    
  }

  abrirMaterias(){
    this.alumnosService.onAbrirCerrarModal();
    this.abrirModalEventEmmitter.emit()
  }


}
