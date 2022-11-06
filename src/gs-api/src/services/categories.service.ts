/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CategoryDto } from '../models/category-dto';
@Injectable({
  providedIn: 'root',
})
class CategoriesService extends __BaseService {
  static readonly findAllCategoryPath = '/gestiondestock/v1/categories/all';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Renvoir la listes des categories
   *
   * Cette methode permet de chercher et renvoiyer la liste des categories sexistent dans la BDD
   * @return La liste des categories / Une liste vide
   */
  findAllCategoryResponse(): __Observable<__StrictHttpResponse<Array<CategoryDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      'http://localhost:8081/' + `gestiondestock/v1/categories/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CategoryDto>>;
      })
    );
  }
  /**
   * Renvoir la listes des categories
   *
   * Cette methode permet de chercher et renvoiyer la liste des categories sexistent dans la BDD
   * @return La liste des categories / Une liste vide
   */
  findAllCategory(): __Observable<Array<CategoryDto>> {
    return this.findAllCategoryResponse().pipe(
      __map(_r => _r.body as Array<CategoryDto>)
    );
  }
}

module CategoriesService {
}

export { CategoriesService }
