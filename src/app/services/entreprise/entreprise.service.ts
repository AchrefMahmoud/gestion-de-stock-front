import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EntrepriseDto } from 'src/gs-api/src/models';
import { ApiService, EntreprisesService } from 'src/gs-api/src/services';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor(
    private entrepriseServiceCreateDelete: EntreprisesService,
    private entrepriseServiceAllId: ApiService
  ) { }

  sinscrire(entreprise: EntrepriseDto): Observable<EntrepriseDto> {
    return this.entrepriseServiceCreateDelete.saveEntreprise(entreprise)
  }
}
