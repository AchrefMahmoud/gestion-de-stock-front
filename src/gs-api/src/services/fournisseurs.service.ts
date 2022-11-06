/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { FournisseurDto } from '../models/fournisseur-dto';
@Injectable({
  providedIn: 'root',
})
class FournisseursService extends __BaseService {
  static readonly findAllFournisseurPath = '/gestiondestock/v1/fournisseurs/all';
  static readonly deleteFournisseurPath = '/gestiondestock/v1/fournisseurs/delete/{idFournisseur}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  findAllFournisseurResponse(): __Observable<__StrictHttpResponse<Array<FournisseurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/fournisseurs/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<FournisseurDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAllFournisseur(): __Observable<Array<FournisseurDto>> {
    return this.findAllFournisseurResponse().pipe(
      __map(_r => _r.body as Array<FournisseurDto>)
    );
  }

  /**
   * @param idFournisseur undefined
   */
  deleteFournisseurResponse(idFournisseur: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/fournisseurs/delete/${encodeURIComponent(String(idFournisseur))}`,
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
   * @param idFournisseur undefined
   */
  deleteFournisseur(idFournisseur: number): __Observable<null> {
    return this.deleteFournisseurResponse(idFournisseur).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module FournisseursService {
}

export { FournisseursService }
