import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EntrepriseService } from 'src/app/services/entreprise/entreprise.service';
import { UserService } from 'src/app/services/user/user.service';
import { AuthenticationRequest } from 'src/gs-api/src/models';
import {EntrepriseDto} from '../../../gs-api/src/models/entreprise-dto';

@Component({
  selector: 'app-page-inscription',
  templateUrl: './page-inscription.component.html',
  styleUrls: ['./page-inscription.component.scss']
})
export class PageInscriptionComponent implements OnInit {
  
  entrepriseDto: EntrepriseDto = {};
  errorsMsg: Array<string> = [];

  constructor(
    private entrepriseService: EntrepriseService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  inscrire(): void {
    this.entrepriseService.sinscrire(this.entrepriseDto)
    .subscribe(entrepriseDto => {
      Swal.fire({
        icon: 'success',
        title: 'Votre compte a été créer avec succes',
        showConfirmButton: false,
        timer: 2000
      });
      this.connectEntreprise();
    }, error => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: this.errorsMsg = error.error.errors,
      });
    }
    );
  } 

  connectEntreprise(): void {
    const authenticationRequest: AuthenticationRequest = {
      login: this.entrepriseDto.mail,
      password: 'password'  
    };
    this.userService.login(authenticationRequest)
    .subscribe(response => {
      this.userService.setAccessToken(response);
      this.getUserByEmail(authenticationRequest.login);
      localStorage.setItem('origin', 'inscription');
      this.router.navigate(['changermotdepasse']);
    });
  }

  getUserByEmail(email?: string): void {
    this.userService.getUserByEmail(email)
    .subscribe(user => {
      this.userService.setConnectedUser(user);
    });
  }

}
