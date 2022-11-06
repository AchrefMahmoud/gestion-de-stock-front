/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ClientDto } from '../models/client-dto';
@Injectable({
  providedIn: 'root',
})
class ClientsService extends __BaseService {
  static readonly findAllClientPath = '/gestiondestock/v1/clients/all';
  static readonly deleteClientPath = '/gestiondestock/v1/clients/delete/{idClient}';
  static readonly findClientByIdPath = '/gestiondestock/v1/clients/{idClient}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Renvoir la listes des client
   *
   * Cette methode permet de chercher et renvoiyer la liste des client sexistent dans la BDD
   * @return La liste des client / Une liste vide
   */
  findAllClientResponse(): __Observable<__StrictHttpResponse<Array<ClientDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/clients/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ClientDto>>;
      })
    );
  }
  /**
   * Renvoir la listes des client
   *
   * Cette methode permet de chercher et renvoiyer la liste des client sexistent dans la BDD
   * @return La liste des client / Une liste vide
   */
  findAllClient(): __Observable<Array<ClientDto>> {
    return this.findAllClientResponse().pipe(
      __map(_r => _r.body as Array<ClientDto>)
    );
  }

  /**
   * Supprimer une categorie par CODE
   *
   * Cette methode permet de spprimer un client par son ID
   * @param idClient undefined
   */
  deleteClientResponse(idClient: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/clients/delete/${encodeURIComponent(String(idClient))}`,
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
   * Supprimer une categorie par CODE
   *
   * Cette methode permet de spprimer un client par son ID
   * @param idClient undefined
   */
  deleteClient(idClient: number): __Observable<null> {
    return this.deleteClientResponse(idClient).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Rechercher un client par ID
   *
   * Cette methode permet de chercher un client par son ID
   * @param idClient undefined
   * @return Le client a ete trouver dans la BDD
   */
  findClientByIdResponse(idClient: number): __Observable<__StrictHttpResponse<ClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/clients/${encodeURIComponent(String(idClient))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ClientDto>;
      })
    );
  }
  /**
   * Rechercher un client par ID
   *
   * Cette methode permet de chercher un client par son ID
   * @param idClient undefined
   * @return Le client a ete trouver dans la BDD
   */
  findClientById(idClient: number): __Observable<ClientDto> {
    return this.findClientByIdResponse(idClient).pipe(
      __map(_r => _r.body as ClientDto)
    );
  }
}

module ClientsService {
}

export { ClientsService }
