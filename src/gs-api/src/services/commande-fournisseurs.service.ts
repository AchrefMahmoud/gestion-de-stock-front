/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CommandeFournisseurDto } from '../models/commande-fournisseur-dto';
@Injectable({
  providedIn: 'root',
})
class CommandeFournisseursService extends __BaseService {
  static readonly findAllCommandeFournisseurPath = '/gestiondestock/v1/commandesfournisseurs/all';
  static readonly deleteArticleInCommandeFournisseurPath = '/gestiondestock/v1/commandesfournisseurs/delete/article/{idCommande}/{idLigneCommande}';
  static readonly deleteCommandeFournisseurPath = '/gestiondestock/v1/commandesfournisseurs/delete/{idCommandeFournisseur}';
  static readonly updateEtatCommandeFournisseurPath = '/gestiondestock/v1/commandesfournisseurs/update/etat/{idCommande}/{etatCommande}';
  static readonly updateQuantiteCommandeFournisseurPath = '/gestiondestock/v1/commandesfournisseurs/update/quantite/{idCommande}/{idLigneCommande}/{quantite}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  findAllCommandeFournisseurResponse(): __Observable<__StrictHttpResponse<Array<CommandeFournisseurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/commandesfournisseurs/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CommandeFournisseurDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAllCommandeFournisseur(): __Observable<Array<CommandeFournisseurDto>> {
    return this.findAllCommandeFournisseurResponse().pipe(
      __map(_r => _r.body as Array<CommandeFournisseurDto>)
    );
  }

  /**
   * @param params The `CommandeFournisseursService.DeleteArticleInCommandeFournisseurParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  deleteArticleInCommandeFournisseurResponse(params: CommandeFournisseursService.DeleteArticleInCommandeFournisseurParams): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/commandesfournisseurs/delete/article/${encodeURIComponent(String(params.idCommande))}/${encodeURIComponent(String(params.idLigneCommande))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * @param params The `CommandeFournisseursService.DeleteArticleInCommandeFournisseurParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  deleteArticleInCommandeFournisseur(params: CommandeFournisseursService.DeleteArticleInCommandeFournisseurParams): __Observable<CommandeFournisseurDto> {
    return this.deleteArticleInCommandeFournisseurResponse(params).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * @param idCommandeFournisseur undefined
   */
  deleteCommandeFournisseurResponse(idCommandeFournisseur: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/commandesfournisseurs/delete/${encodeURIComponent(String(idCommandeFournisseur))}`,
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
   * @param idCommandeFournisseur undefined
   */
  deleteCommandeFournisseur(idCommandeFournisseur: number): __Observable<null> {
    return this.deleteCommandeFournisseurResponse(idCommandeFournisseur).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CommandeFournisseursService.UpdateEtatCommandeFournisseurParams` containing the following parameters:
   *
   * - `idCommande`:
   *
   * - `etatCommande`:
   *
   * @return successful operation
   */
  updateEtatCommandeFournisseurResponse(params: CommandeFournisseursService.UpdateEtatCommandeFournisseurParams): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondestock/v1/commandesfournisseurs/update/etat/${encodeURIComponent(String(params.idCommande))}/${encodeURIComponent(String(params.etatCommande))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * @param params The `CommandeFournisseursService.UpdateEtatCommandeFournisseurParams` containing the following parameters:
   *
   * - `idCommande`:
   *
   * - `etatCommande`:
   *
   * @return successful operation
   */
  updateEtatCommandeFournisseur(params: CommandeFournisseursService.UpdateEtatCommandeFournisseurParams): __Observable<CommandeFournisseurDto> {
    return this.updateEtatCommandeFournisseurResponse(params).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * @param params The `CommandeFournisseursService.UpdateQuantiteCommandeFournisseurParams` containing the following parameters:
   *
   * - `quantite`:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  updateQuantiteCommandeFournisseurResponse(params: CommandeFournisseursService.UpdateQuantiteCommandeFournisseurParams): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondestock/v1/commandesfournisseurs/update/quantite/${encodeURIComponent(String(params.idCommande))}/${encodeURIComponent(String(params.idLigneCommande))}/${encodeURIComponent(String(params.quantite))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * @param params The `CommandeFournisseursService.UpdateQuantiteCommandeFournisseurParams` containing the following parameters:
   *
   * - `quantite`:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  updateQuantiteCommandeFournisseur(params: CommandeFournisseursService.UpdateQuantiteCommandeFournisseurParams): __Observable<CommandeFournisseurDto> {
    return this.updateQuantiteCommandeFournisseurResponse(params).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }
}

module CommandeFournisseursService {

  /**
   * Parameters for deleteArticleInCommandeFournisseur
   */
  export interface DeleteArticleInCommandeFournisseurParams {
    idLigneCommande: number;
    idCommande: number;
  }

  /**
   * Parameters for updateEtatCommandeFournisseur
   */
  export interface UpdateEtatCommandeFournisseurParams {
    idCommande: number;
    etatCommande: 'EN_PREPARATION' | 'VALIDER' | 'LIVREE';
  }

  /**
   * Parameters for updateQuantiteCommandeFournisseur
   */
  export interface UpdateQuantiteCommandeFournisseurParams {
    quantite: number;
    idLigneCommande: number;
    idCommande: number;
  }
}

export { CommandeFournisseursService }
