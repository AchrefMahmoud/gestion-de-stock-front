import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { UtilisateurDto } from 'src/gs-api/src/models';
import { ChangerMotDePasseUtilisateurDto } from 'src/gs-api/src/models/changer-mot-de-passe-dto';
import { CategoriesService } from 'src/gs-api/src/services';

@Component({
  selector: 'app-changer-mot-de-passe',
  templateUrl: './changer-mot-de-passe.component.html',
  styleUrls: ['./changer-mot-de-passe.component.scss']
})
export class ChangerMotDePasseComponent implements OnInit {

  changerMotDePasseDto : ChangerMotDePasseUtilisateurDto = {};
  connectedUser: UtilisateurDto = {};
  ancienMotDePasse = '';

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.connectedUser = this.userService.getConnectedUser();
    if (localStorage.getItem('origin') && localStorage.getItem('origin') == 'inscription') {
      this.ancienMotDePasse = 'password';
      localStorage.removeItem('origin');
    }
  }

  cancelClick(): void {
    this.router.navigate(['profil']);
  }

  changerMotDePasseUtilisateur(): void {
    this.changerMotDePasseDto.id = this.userService.getConnectedUser().id;
    this.userService.changerMotDePasse(this.changerMotDePasseDto)
    .subscribe(data => {
      // rien a faire
      this.router.navigate(['profil']);
    });
  }

}
