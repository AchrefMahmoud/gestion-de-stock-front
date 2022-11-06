import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CltfrsService } from 'src/app/services/cltfrs/cltfrs.service';
import { ClientDto, FournisseurDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-nouveau-clt-frs',
  templateUrl: './nouveau-clt-frs.component.html',
  styleUrls: ['./nouveau-clt-frs.component.scss']
})
export class NouveauCltFrsComponent implements OnInit {

  origin = '';

  clientFournisseur: any = {};
  errorMsg: Array<string> = [];


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cltFrsService: CltfrsService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.origin = data?.['origin'];
    });
    this.findObject();
  }

  findObject(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      if (this.origin === 'client') {
        this.cltFrsService.findClientById(id)
        .subscribe(client => {
          this.clientFournisseur = client;
        });
      } else if (this.origin == 'fournisseur') {
        this.cltFrsService.findFournsseurById(id)
        .subscribe(fournisseur => {
          this.clientFournisseur = fournisseur;
        });
      }
    }
  }

  enregistrer(): void {
    if (this.origin === 'client') {
      this.cltFrsService.enregistrerClient(this.mapToClient())
      .subscribe(client => {
        this.router.navigate(['clients'])
      }, error => {
        this.errorMsg = error.error.errors;
      });
     } else if (this.origin == 'fournisseur') {
      this.cltFrsService.enregistrerFournisseur(this.mapToFournisseur())
      .subscribe(fournisseur => {
        this.router.navigate(['fournisseurs'])
      }, error => {
        this.errorMsg = error.error.errors;
      });
     }
  }

  cancelClick(): void {
    if (this.origin === 'client') {
      this.router.navigate(['clients'])
    } else if (this.origin == 'fournisseur') {
      this.router.navigate(['fournisseurs'])
    }
  }

  mapToClient(): ClientDto {
    const clientDto: ClientDto = this.clientFournisseur;
    return clientDto;
  }

  mapToFournisseur(): FournisseurDto {
    const fournisseurDto: FournisseurDto = this.clientFournisseur;
    return fournisseurDto;
  }

}
