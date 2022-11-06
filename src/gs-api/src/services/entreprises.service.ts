/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EntrepriseDto } from '../models/entreprise-dto';
@Injectable({
  providedIn: 'root',
})
class EntreprisesService extends __BaseService {
  static readonly saveEntreprisePath = '/gestiondestock/v1/entreprises/create';
  static readonly deleteEntreprisePath = '/gestiondestock/v1/entreprises/delete/{idEntreprise}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveEntrepriseResponse(body?: EntrepriseDto): __Observable<__StrictHttpResponse<EntrepriseDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/entreprises/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EntrepriseDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  saveEntreprise(body?: EntrepriseDto): __Observable<EntrepriseDto> {
    return this.saveEntrepriseResponse(body).pipe(
      __map(_r => _r.body as EntrepriseDto)
    );
  }

  /**
   * @param idEntreprise undefined
   */
  deleteEntrepriseResponse(idEntreprise: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/entreprises/delete/${encodeURIComponent(String(idEntreprise))}`,
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
   * @param idEntreprise undefined
   */
  deleteEntreprise(idEntreprise: number): __Observable<null> {
    return this.deleteEntrepriseResponse(idEntreprise).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module EntreprisesService {
}

export { EntreprisesService }
