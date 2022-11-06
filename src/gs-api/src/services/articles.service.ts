/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ArticleDto } from '../models/article-dto';
import { LigneCommandeClientDto } from '../models/ligne-commande-client-dto';
import { LigneCommandeFournisseurDto } from '../models/ligne-commande-fournisseur-dto';
@Injectable({
  providedIn: 'root',
})
class ArticlesService extends __BaseService {
  static readonly findAllArticlePath = '/gestiondestock/v1/articles/all';
  static readonly saveArticlePath = '/gestiondestock/v1/articles/create';
  static readonly findAllArticleByIdCategoryPath = '/gestiondestock/v1/articles/filtre/category/{idCategory}';
  static readonly findHistoriqueCommandeClientArticlePath = '/gestiondestock/v1/articles/historique/commandeclient/{idArticle}';
  static readonly findHistoriqueCommandeFournisseurArticlePath = '/gestiondestock/v1/articles/historique/commandefournisseur/{idArticle}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Renvoir la listes des articles
   *
   * Cette methode permet de chercher et renvoiyer la liste des articles existent dans la BDD
   * @return La liste des articles / Une liste vide
   */
  findAllArticleResponse(): __Observable<__StrictHttpResponse<Array<ArticleDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/articles/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ArticleDto>>;
      })
    );
  }
  /**
   * Renvoir la listes des articles
   *
   * Cette methode permet de chercher et renvoiyer la liste des articles existent dans la BDD
   * @return La liste des articles / Une liste vide
   */
  findAllArticle(): __Observable<Array<ArticleDto>> {
    return this.findAllArticleResponse().pipe(
      __map(_r => _r.body as Array<ArticleDto>)
    );
  }

  /**
   * Enregistrer un article
   *
   * Cette methode permet d'enregistrer ou modifier un article
   * @param body undefined
   * @return L'objet article creer / modifier
   */
  saveArticleResponse(body?: ArticleDto): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/articles/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ArticleDto>;
      })
    );
  }
  /**
   * Enregistrer un article
   *
   * Cette methode permet d'enregistrer ou modifier un article
   * @param body undefined
   * @return L'objet article creer / modifier
   */
  saveArticle(body?: ArticleDto): __Observable<ArticleDto> {
    return this.saveArticleResponse(body).pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }

  /**
   * @param idCategory undefined
   * @return successful operation
   */
  findAllArticleByIdCategoryResponse(idCategory: number): __Observable<__StrictHttpResponse<Array<ArticleDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/articles/filtre/category/${encodeURIComponent(String(idCategory))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ArticleDto>>;
      })
    );
  }
  /**
   * @param idCategory undefined
   * @return successful operation
   */
  findAllArticleByIdCategory(idCategory: number): __Observable<Array<ArticleDto>> {
    return this.findAllArticleByIdCategoryResponse(idCategory).pipe(
      __map(_r => _r.body as Array<ArticleDto>)
    );
  }

  /**
   * @param idArticle undefined
   * @return successful operation
   */
  findHistoriqueCommandeClientArticleResponse(idArticle: number): __Observable<__StrictHttpResponse<Array<LigneCommandeClientDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/articles/historique/commandeclient/${encodeURIComponent(String(idArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneCommandeClientDto>>;
      })
    );
  }
  /**
   * @param idArticle undefined
   * @return successful operation
   */
  findHistoriqueCommandeClientArticle(idArticle: number): __Observable<Array<LigneCommandeClientDto>> {
    return this.findHistoriqueCommandeClientArticleResponse(idArticle).pipe(
      __map(_r => _r.body as Array<LigneCommandeClientDto>)
    );
  }

  /**
   * @param idArticle undefined
   * @return successful operation
   */
  findHistoriqueCommandeFournisseurArticleResponse(idArticle: number): __Observable<__StrictHttpResponse<Array<LigneCommandeFournisseurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/articles/historique/commandefournisseur/${encodeURIComponent(String(idArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneCommandeFournisseurDto>>;
      })
    );
  }
  /**
   * @param idArticle undefined
   * @return successful operation
   */
  findHistoriqueCommandeFournisseurArticle(idArticle: number): __Observable<Array<LigneCommandeFournisseurDto>> {
    return this.findHistoriqueCommandeFournisseurArticleResponse(idArticle).pipe(
      __map(_r => _r.body as Array<LigneCommandeFournisseurDto>)
    );
  }
}

module ArticlesService {
}

export { ArticlesService }
