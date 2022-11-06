/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CommandeClientDto } from '../models/commande-client-dto';
@Injectable({
  providedIn: 'root',
})
class CommandesclientsService extends __BaseService {
  static readonly deleteArticleInCommandeClientPath = '/gestiondestock/v1/commandesclients/delete/article/{idCommande}/{idLigneCommande}';
  static readonly deleteCommandeClientPath = '/gestiondestock/v1/commandesclients/delete/{idCommandeClient}';
  static readonly updateArticleInCommandeClientPath = '/gestiondestock/v1/commandesclients/update/article/{idCommande}/{idLigneCommande}/{idArticle}';
  static readonly updateEtatCommandeClientPath = '/gestiondestock/v1/commandesclients/update/etat/{idCommande}/{etatCommande}';
  static readonly findCommandeClientByIdPath = '/gestiondestock/v1/commandesclients/{idCommandeClient}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `CommandesclientsService.DeleteArticleInCommandeClientParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  deleteArticleInCommandeClientResponse(params: CommandesclientsService.DeleteArticleInCommandeClientParams): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/commandesclients/delete/article/${encodeURIComponent(String(params.idCommande))}/${encodeURIComponent(String(params.idLigneCommande))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * @param params The `CommandesclientsService.DeleteArticleInCommandeClientParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  deleteArticleInCommandeClient(params: CommandesclientsService.DeleteArticleInCommandeClientParams): __Observable<CommandeClientDto> {
    return this.deleteArticleInCommandeClientResponse(params).pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * @param idCommandeClient undefined
   */
  deleteCommandeClientResponse(idCommandeClient: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/commandesclients/delete/${encodeURIComponent(String(idCommandeClient))}`,
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
   * @param idCommandeClient undefined
   */
  deleteCommandeClient(idCommandeClient: number): __Observable<null> {
    return this.deleteCommandeClientResponse(idCommandeClient).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CommandesclientsService.UpdateArticleInCommandeClientParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * - `idArticle`:
   *
   * @return successful operation
   */
  updateArticleInCommandeClientResponse(params: CommandesclientsService.UpdateArticleInCommandeClientParams): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondestock/v1/commandesclients/update/article/${encodeURIComponent(String(params.idCommande))}/${encodeURIComponent(String(params.idLigneCommande))}/${encodeURIComponent(String(params.idArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * @param params The `CommandesclientsService.UpdateArticleInCommandeClientParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * - `idArticle`:
   *
   * @return successful operation
   */
  updateArticleInCommandeClient(params: CommandesclientsService.UpdateArticleInCommandeClientParams): __Observable<CommandeClientDto> {
    return this.updateArticleInCommandeClientResponse(params).pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * @param params The `CommandesclientsService.UpdateEtatCommandeClientParams` containing the following parameters:
   *
   * - `idCommande`:
   *
   * - `etatCommande`:
   *
   * @return successful operation
   */
  updateEtatCommandeClientResponse(params: CommandesclientsService.UpdateEtatCommandeClientParams): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondestock/v1/commandesclients/update/etat/${encodeURIComponent(String(params.idCommande))}/${encodeURIComponent(String(params.etatCommande))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * @param params The `CommandesclientsService.UpdateEtatCommandeClientParams` containing the following parameters:
   *
   * - `idCommande`:
   *
   * - `etatCommande`:
   *
   * @return successful operation
   */
  updateEtatCommandeClient(params: CommandesclientsService.UpdateEtatCommandeClientParams): __Observable<CommandeClientDto> {
    return this.updateEtatCommandeClientResponse(params).pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * @param idCommandeClient undefined
   * @return successful operation
   */
  findCommandeClientByIdResponse(idCommandeClient: number): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/commandesclients/${encodeURIComponent(String(idCommandeClient))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * @param idCommandeClient undefined
   * @return successful operation
   */
  findCommandeClientById(idCommandeClient: number): __Observable<CommandeClientDto> {
    return this.findCommandeClientByIdResponse(idCommandeClient).pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }
}

module CommandesclientsService {

  /**
   * Parameters for deleteArticleInCommandeClient
   */
  export interface DeleteArticleInCommandeClientParams {
    idLigneCommande: number;
    idCommande: number;
  }

  /**
   * Parameters for updateArticleInCommandeClient
   */
  export interface UpdateArticleInCommandeClientParams {
    idLigneCommande: number;
    idCommande: number;
    idArticle: number;
  }

  /**
   * Parameters for updateEtatCommandeClient
   */
  export interface UpdateEtatCommandeClientParams {
    idCommande: number;
    etatCommande: 'EN_PREPARATION' | 'VALIDER' | 'LIVREE';
  }
}

export { CommandesclientsService }
