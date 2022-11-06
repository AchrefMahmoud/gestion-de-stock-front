/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable, Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';
import { ChangerMotDePasseUtilisateurDto } from '../models/changer-mot-de-passe-dto';

@Injectable({
  providedIn: 'root',
})
class UtilisateursService extends __BaseService {
  static readonly deleteUtilisateurPath = 'http://localhost:8081/gestiondestock/v1/utilisateurs/delete/{idUtilisateur}';
  readonly backend = 'http://localhost:8081/gestiondestock/v1/utilisateurs';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param idUtilisateur undefined
   */
  deleteUtilisateurResponse(idUtilisateur: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/utilisateurs/delete/${encodeURIComponent(String(idUtilisateur))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param idUtilisateur undefined
   */
  deleteUtilisateur(idUtilisateur: number): __Observable<null> {
    return this.deleteUtilisateurResponse(idUtilisateur).pipe(
      __map(_r => _r.body as null)
    );
  }

  findByEmail(email:string):Observable<any> {
    return this.http.post(this.backend+"/getbyemail", email)
  }

  changerMotDePasse(changermotdepasseDto: ChangerMotDePasseUtilisateurDto) {
    return this.http.post(this.backend+"/changermotdepasse", changermotdepasseDto)
  }

}

module UtilisateursService {
}

export { UtilisateursService }
