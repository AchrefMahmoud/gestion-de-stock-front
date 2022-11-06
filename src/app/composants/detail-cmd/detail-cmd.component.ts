import { Component, OnInit, Input } from '@angular/core';
import { LigneCommandeClientDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-detail-cmd',
  templateUrl: './detail-cmd.component.html',
  styleUrls: ['./detail-cmd.component.scss']
})
export class DetailCmdComponent implements OnInit {

  @Input()
  ligneCommande: LigneCommandeClientDto = {};

  constructor() { }

  ngOnInit(): void {
  }

}
