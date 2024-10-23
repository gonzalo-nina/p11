import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  user: string = '';
  password: string = '';

  constructor(private router: Router) {}

  redirigir() {
    this.router.navigate(['/registro']);
  }
  
  loguearse() {
    if (this.user === 'admin' && this.password === 'admin') {
      alert('Datos correctos');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}
