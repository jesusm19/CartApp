import { Component, EventEmitter, Output } from '@angular/core';
import { AlumnosService } from '../../../services/alumnos';

@Component({
  standalone: true,
  selector: 'app-modal-materias',
  imports: [],
  templateUrl: './modalMaterias.html',
})
export class ModalMateriasComponent {
  @Output() cerrarModalEventEmmitter: EventEmitter<void> = new EventEmitter();

  constructor(private alumnosService: AlumnosService){

  }

  cerrarModal(){
    this.alumnosService.onAbrirCerrarModal();
    this.cerrarModalEventEmmitter.emit()
  }

}
