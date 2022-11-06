import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommandeClientDto, CommandeFournisseurDto } from 'src/gs-api/src/models';
import { ApiService, CommandeFournisseursService, CommandesclientsService } from 'src/gs-api/src/services';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class CmdCltFrsService {

  constructor(
    private commandeClientService: CommandesclientsService,
    private commandeFournisseurService: CommandeFournisseursService,
    private cmdClientFournisseurBis: ApiService,
    private userService: UserService
  ) { }

  enregistrerCommandeClient(commandeClient: CommandeClientDto): Observable<CommandeClientDto> {
    commandeClient.idEntreprise = this.userService.getConnectedUser().entreprise?.id;
    return this.cmdClientFournisseurBis.saveCommandeClient(commandeClient);
  }

  enregistrerCommandeFournisseur(commandeFournisseur: CommandeFournisseurDto): Observable<CommandeFournisseurDto> {
    commandeFournisseur.idEntreprise = this.userService.getConnectedUser().entreprise?.id;
    return this.cmdClientFournisseurBis.saveCommandeFournisseur(commandeFournisseur);
  }
}
