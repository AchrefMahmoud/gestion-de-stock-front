import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CltfrsService } from 'src/app/services/cltfrs/cltfrs.service';
import { FournisseurDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-page-fournisseur',
  templateUrl: './page-fournisseur.component.html',
  styleUrls: ['./page-fournisseur.component.scss']
})
export class PageFournisseurComponent implements OnInit {

  listFournisseur: Array<FournisseurDto> = [];
  errorMsg = '';

  constructor(
    private router: Router,
    private cltFrsService: CltfrsService
  ) { }

  ngOnInit(): void {
    this.findAllFournisseurs(); 
  }

  findAllFournisseurs(): void {
    this.cltFrsService.findAllFournsseur()
    .subscribe(fournisseur => {
      this.listFournisseur = fournisseur;
    });
  }

  nouveauFournisseur(): void {
    this.router.navigate(['nouveaufournisseur']);
  }

  handelSupression(event: any): void {
    if (event === 'success') {
      this.findAllFournisseurs();
    } else {
      this.errorMsg = event;
    }
  }

}
