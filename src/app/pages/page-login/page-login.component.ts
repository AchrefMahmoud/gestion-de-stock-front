import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { AuthenticationRequest, AuthenticationResponse } from 'src/gs-api/src/models';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {

  authenticationRequest: AuthenticationRequest = {};
  errorMessage = '';

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  login() {
    this.userService.login(this.authenticationRequest).subscribe((data: AuthenticationResponse) => {
      this.userService.setAccessToken(data);
      this.getUserByEmail();
      Swal.fire({
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['home']);
    },
    error => {
      this.errorMessage = 'Email et / ou mot de passe incorrecte';
    });
  }

  getUserByEmail(): void {
    this.userService.getUserByEmail(this.authenticationRequest.login)
    .subscribe(user => {
      console.log(user)
      this.userService.setConnectedUser(user);
    });
  }

}
