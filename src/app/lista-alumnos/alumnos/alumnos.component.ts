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
    { nombre: 'Pedro Perez', nota: 6 },
    { nombre: 'Juana Gonzalez', nota: 9 },
    { nombre: 'Matias Semeria', nota: 7 },
    { nombre: 'Lautaro Cortez', nota: 4 },
    { nombre: 'Joan Paez', nota: 2 },
    { nombre: 'Luz Flores', nota: 7 },
    { nombre: 'Jazmin Carrera', nota: 3 },
    { nombre: 'Osvaldo Ojeda ', nota: 10 },
    { nombre: 'Ornelia Ojeda', nota: 10 },
    { nombre: 'Agustin Marcuzzi', nota: 7 },
  ];

  aprobado: boolean = false;
}
