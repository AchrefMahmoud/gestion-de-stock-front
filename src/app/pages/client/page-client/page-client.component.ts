import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CltfrsService } from 'src/app/services/cltfrs/cltfrs.service';
import { ClientDto } from 'src/gs-api/src/models';
@Component({
  selector: 'app-page-client',
  templateUrl: './page-client.component.html',
  styleUrls: ['./page-client.component.scss']
})
export class PageClientComponent implements OnInit {

  listClient: Array<ClientDto> = [];
  errorMsg = '';

  constructor(
    private router: Router,
    private cltFrsService: CltfrsService
  ) { }
  
  ngOnInit(): void {
    this.findAllClients();
  }

  findAllClients(): void {
    this.cltFrsService.findAllClients()
    .subscribe(clients => {
      this.listClient = clients;
    });
  }

  nouveauClient(): void {
    this.router.navigate(['nouveauclient']);
  }

  handelSupression(event: any): void {
    if (event === 'success') {
      this.findAllClients();
    } else {
      this.errorMsg = event;
    }
  }

}
