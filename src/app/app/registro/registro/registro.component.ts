import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  user:string="";
  password:string="";
  passwordValid:string="";
  email:string="";
  constructor(private router: Router) {}

  redirigir(){
    this.router.navigate(['/inicio']);
  }

  validarRegistro(){
    if(this.user === '' || this.password === '' || this.passwordValid === '' || this.email === ''){
      alert('Todos los campos son obligatorios');
    } else if(this.password !== this.passwordValid){
      alert('Las contraseñas no coinciden');
    } else {
      alert('Registro correcto');
    }
  }
}
