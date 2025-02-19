import { Component, OnInit } from '@angular/core';
import { Compte } from '../model/compte.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-connect',
  imports: [FormsModule , CommonModule , MenuComponent],
  templateUrl: './connect.component.html',
  styleUrl: './connect.component.css'
})
export class ConnectComponent implements OnInit {
  user = new Compte();
  erreur = false;
  constructor(private authServ : AuthService, private router: Router) { }
  
  connected(){
    let permission: boolean = this.authServ.connect(this.user);
console.log("Tentative de connexion :" + this.user.email);
if (permission)
this.router.navigate(['/articles']);
else
this.erreur=true;
}
reset() {
  this.erreur=false;
  }

ngOnInit(): void {
}

}
