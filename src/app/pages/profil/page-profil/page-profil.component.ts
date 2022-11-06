import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { UtilisateurDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-page-profil',
  templateUrl: './page-profil.component.html',
  styleUrls: ['./page-profil.component.scss']
})
export class PageProfilComponent implements OnInit {

  connectedUser: UtilisateurDto = {};

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.connectedUser = this.userService.getConnectedUser();
  }

  modifierMotDePasse() {
    this.router.navigate(['changermotdepasse']);
  }

  clearToken(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('connectedUser');
    this.router.navigate(['/login']);
    window.location.reload();
  }

  logout(): void {
    this.clearToken()
  }

}
