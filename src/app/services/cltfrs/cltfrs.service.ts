import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ClientDto, FournisseurDto } from 'src/gs-api/src/models';
import { ApiService, ClientsService, FournisseursService } from 'src/gs-api/src/services';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class CltfrsService {
  id(id: any) {
    throw new Error('Method not implemented.');
  }

  constructor(
    private userService: UserService,
    private clientService: ClientsService,
    private clientfournisseurServiceBis: ApiService,
    private fournisseurService: FournisseursService
  ) { }

  enregistrerClient(clientDto: ClientDto): Observable<ClientDto> {
    clientDto.idEntreprise = this.userService.getConnectedUser().entreprise?.id;
    return this.clientfournisseurServiceBis.saveClient(clientDto);
  }

  enregistrerFournisseur(fournisseurDto: FournisseurDto): Observable<FournisseurDto> {
    fournisseurDto.idEntreprise = this.userService.getConnectedUser().entreprise?.id;
    return this.clientfournisseurServiceBis.saveFournisseur(fournisseurDto);
  }

  findAllClients(): Observable<ClientDto[]> {
    return this.clientService.findAllClient(); 
  }

  findAllFournsseur(): Observable<FournisseurDto[]> {
    return this.fournisseurService.findAllFournisseur(); 
  }
  
  findClientById(id: number): Observable<ClientDto> {
    if (id) {
      return this.clientService.findClientById(id);
    }
    return of();
  }

  findFournsseurById(id: number): Observable<FournisseurDto> {
    if (id) {
      return this.clientfournisseurServiceBis.findFournisseurById(id);
    }
    return of();
  }

  deleteClient(idClient: number): Observable<any> {
    if (idClient) {
      return this.clientService.deleteClient(idClient);
    }
    return of();
  }

  deleteFournisseur(idFournisseur: number): Observable<any> {
    if (idFournisseur) {
      return this.fournisseurService.deleteFournisseur(idFournisseur);
    }
    return of();
  }
}
