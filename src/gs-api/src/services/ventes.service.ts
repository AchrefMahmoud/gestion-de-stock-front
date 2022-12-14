/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { VentesDto } from '../models/ventes-dto';
@Injectable({
  providedIn: 'root',
})
class VentesService extends __BaseService {
  static readonly findAllVentePath = '/gestiondestock/v1/ventes/all';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  findAllVenteResponse(): __Observable<__StrictHttpResponse<Array<VentesDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/ventes/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<VentesDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAllVente(): __Observable<Array<VentesDto>> {
    return this.findAllVenteResponse().pipe(
      __map(_r => _r.body as Array<VentesDto>)
    );
  }
}

module VentesService {
}

export { VentesService }
