import { Component } from '@angular/core';

interface IAlumno {
  nombre: string;
  nota: number;
}

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'],
})
export class AlumnosComponent {
  constructor() {}

  alumnos: IAlumno[] = [
    { nombre: 'Pedro Perez', nota: 3 },
    { nombre: 'Juana Gonzalez', nota: 2 },
    { nombre: 'Matias Semeria', nota: 2 },
    { nombre: 'Lautaro Cortez', nota: 4 },
    { nombre: 'Joan Paez', nota: 2 },
    { nombre: 'Luz Flores', nota: 1 },
    { nombre: 'Jazmin Carrera', nota: 3 },
    { nombre: 'Osvaldo Ojeda ', nota: 6 },
    { nombre: 'Ornelia Ojeda', nota: 5 },
    { nombre: 'Agustin Marcuzzi', nota: 1 },
  ];

  aprobado: boolean = false;
}
