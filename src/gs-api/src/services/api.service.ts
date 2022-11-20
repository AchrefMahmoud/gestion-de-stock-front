/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { LigneVenteDto } from '../models/ligne-vente-dto';
import { ArticleDto } from '../models/article-dto';
import { CategoryDto } from '../models/category-dto';
import { ClientDto } from '../models/client-dto';
import { CommandeClientDto } from '../models/commande-client-dto';
import { CommandeFournisseurDto } from '../models/commande-fournisseur-dto';
import { EntrepriseDto } from '../models/entreprise-dto';
import { FournisseurDto } from '../models/fournisseur-dto';
import { MouvementStockDto } from '../models/mouvement-stock-dto';
import { UtilisateurDto } from '../models/utilisateur-dto';
import { VentesDto } from '../models/ventes-dto';
import { AuthenticationResponse } from '../models/authentication-response';
import { AuthenticationRequest } from '../models/authentication-request';
@Injectable({
  providedIn: 'root',
})
class ApiService extends __BaseService {
  static readonly deleteArticlePath = '/gestiondestock/v1/articles/delete/{idArticle}';
  static readonly findHistoriqueVentesArticlePath = '/gestiondestock/v1/articles/historique/vente/{idArticle}';
  static readonly findArticleByCodeArticlePath = '/gestiondestock/v1/articles/findByCode/{codeArticle}';
  static readonly findArticleByIdPath = '/gestiondestock/v1/articles/{idArticle}';
  static readonly saveCategoryPath = '/gestiondestock/v1/categories/create';
  static readonly deleteCategoryPath = '/gestiondestock/v1/categories/delete/{idCategory}';
  static readonly findCategoryByCodeCategoryPath = '/gestiondestock/v1/categories/findByCode/{codeCategory}';
  static readonly findCategoryByIdPath = '/gestiondestock/v1/categories/{idCategory}';
  static readonly saveClientPath = '/gestiondestock/v1/clients/create';
  static readonly findAllCommandeClientPath = '/gestiondestock/v1/commandesclients/all';
  static readonly saveCommandeClientPath = '/gestiondestock/v1/commandesclients/create';
  static readonly updateClientInCommandeClientPath = '/gestiondestock/v1/commandesclients/update/client/{idCommande}/{idClient}';
  static readonly updateQuantiteCommandeClientPath = '/gestiondestock/v1/commandesclients/update/quantite/{idCommande}/{idLigneCommande}/{quantite}';
  static readonly findCommandeClientByCodePath = '/gestiondestock/v1/commandesclients/{codeCommandeClient}';
  static readonly saveCommandeFournisseurPath = '/gestiondestock/v1/commandesfournisseurs/create';
  static readonly updateArticleInCommandeFournisseurPath = '/gestiondestock/v1/commandesfournisseurs/update/article/{idCommande}/{idLigneCommande}/{idArticle}';
  static readonly updateFournisseurInCommandeFournisseurPath = '/gestiondestock/v1/commandesfournisseurs/update/fournisseur/{idCommande}/{idFournisseur}';
  static readonly findCommandeFournisseurByCodePath = '/gestiondestock/v1/commandesfournisseurs/{codeCommandeFoutnisseur}';
  static readonly findCommandeFournisseurByIdPath = '/gestiondestock/v1/commandesfournisseurs/{idCommandeFournisseur}';
  static readonly findAllEntreprisePath = '/gestiondestock/v1/entreprises/all';
  static readonly findEntrepriseByIdPath = '/gestiondestock/v1/entreprises/{idEntreprise}';
  static readonly saveFournisseurPath = '/gestiondestock/v1/fournisseurs/create';
  static readonly findFournisseurByIdPath = '/gestiondestock/v1/fournisseurs/{idFournisseur}';
  static readonly correctionStockNegPath = '/gestiondestock/v1/mvtstk/correctionneg';
  static readonly sortieStockPath = '/gestiondestock/v1/mvtstk/sortie';
  static readonly stockReelArticlePath = '/gestiondestock/v1/mvtstk/stockreel/{idArticle}';
  static readonly findAllUtilisateurPath = '/gestiondestock/v1/utilisateurs/all';
  static readonly saveUtilisateurPath = '/gestiondestock/v1/utilisateurs/create';
  static readonly findUtilisateurByIdPath = '/gestiondestock/v1/utilisateurs/{idUtilisateur}';
  static readonly saveVentePath = '/gestiondestock/v1/ventes/create';
  static readonly deleteVentePath = '/gestiondestock/v1/ventes/delete/{idVente}';
  static readonly findVenteByIdPath = '/gestiondestock/v1/ventes/{idVente}';
  static readonly authenticatePath = 'gestiondestock/v1/auth/authenticate';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Supprimer un article par CODE
   *
   * Cette methode permet de spprimer un article par son ID
   */
  deleteArticleResponse(idArticle: number): __Observable<any> {  
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = idArticle;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/articles/delete/${encodeURIComponent(String(idArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });
      
      return this.http.delete("http://localhost:8081/gestiondestock/v1" + "/gestiondestock/v1/articles/delete/" + idArticle)
/*    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    ); */
  }
  /**
   * Supprimer un article par CODE
   *
   * Cette methode permet de spprimer un article par son ID
   */
  deleteArticle(idArticle: number): __Observable<null> {
    return this.deleteArticleResponse(idArticle).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @return successful operation
   */
  findHistoriqueVentesArticleResponse(idArticle: string): __Observable<__StrictHttpResponse<Array<LigneVenteDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/articles/historique/vente/${encodeURIComponent(String(idArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneVenteDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findHistoriqueVentesArticle(idArticle: string): __Observable<Array<LigneVenteDto>> {
    return this.findHistoriqueVentesArticleResponse(idArticle).pipe(
      __map(_r => _r.body as Array<LigneVenteDto>)
    );
  }

  /**
   * Rechercher un article par CODE
   *
   * Cette methode permet de chercher un article par son CODE
   * @return L'article a ete trouver dans la BDD
   */
  findArticleByCodeArticleResponse(codeArticle: string): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = codeArticle;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/articles/findByCode/${encodeURIComponent(String(codeArticle))}`,
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
   * Rechercher un article par CODE
   *
   * Cette methode permet de chercher un article par son CODE
   * @return L'article a ete trouver dans la BDD
   */
  findArticleByCodeArticle(codeArticle: string): __Observable<ArticleDto> {
    return this.findArticleByCodeArticleResponse(codeArticle).pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }

  /**
   * Rechercher un article par ID
   *
   * Cette methode permet de chercher un article par son ID
   * @return L'article a ete trouver dans la BDD
   */
  findArticleByIdResponse(idArticle: number): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = idArticle;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/articles/${encodeURIComponent(Number(idArticle))}`,
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
   * Rechercher un article par ID
   *
   * Cette methode permet de chercher un article par son ID
   * @return L'article a ete trouver dans la BDD
   */
  findArticleById(idArticle: number): __Observable<ArticleDto> {
    return this.findArticleByIdResponse(idArticle).pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }

  /**
   * Enregistrer une categorie
   *
   * Cette methode permet d'enregistrer ou modifier une categorie
   * @return L'objet categorie creer / modifier
   */
  saveCategoryResponse(categoryDto: CategoryDto): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
  __body = categoryDto; //
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/categories/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDto>;
      })
    );
  }
  /**
   * Enregistrer une categorie
   *
   * Cette methode permet d'enregistrer ou modifier une categorie
   * @return L'objet categorie creer / modifier
   */
  saveCategory(categoryDto: CategoryDto): __Observable<CategoryDto> {
    return this.saveCategoryResponse(categoryDto).pipe(
      __map(_r => _r.body as CategoryDto)
    );
  }

  /**
   * Supprimer une categorie par CODE
   *
   * Cette methode permet de spprimer une categorie par son ID
   */
  deleteCategoryResponse(idCategory: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = idCategory;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/categories/delete/${encodeURIComponent(String(idCategory))}`,
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
   * Cette methode permet de spprimer une categorie par son ID
   */
  deleteCategory(idCategory: number): __Observable<null> {
    return this.deleteCategoryResponse(idCategory).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Rechercher une categorie par CODE
   *
   * Cette methode permet de chercher une categories par son CODE
   * @return La categorie a ete trouver dans la BDD
   */
  findCategoryByCodeCategoryResponse(codeCategory: string): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/categories/findByCode/${encodeURIComponent(String(codeCategory))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDto>;
      })
    );
  }
  /**
   * Rechercher une categorie par CODE
   *
   * Cette methode permet de chercher une categories par son CODE
   * @return La categorie a ete trouver dans la BDD
   */
  findCategoryByCodeCategory(codeCategory: string): __Observable<CategoryDto> {
    return this.findCategoryByCodeCategoryResponse(codeCategory).pipe(
      __map(_r => _r.body as CategoryDto)
    );
  }

  /**
   * Rechercher une categories par ID
   *
   * Cette methode permet de chercher une categories par son ID
   * @return La categorie a ete trouver dans la BDD
   */
  findCategoryByIdResponse(idCategory: number): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = idCategory; // c que j'ajoute
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/categories/${encodeURIComponent(String(idCategory))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDto>;
      })
    );
  }
  /**
   * Rechercher une categories par ID
   *
   * Cette methode permet de chercher une categories par son ID
   * @return La categorie a ete trouver dans la BDD
   */
  findCategoryById(idCategory: number): __Observable<CategoryDto> {
    return this.findCategoryByIdResponse(idCategory).pipe(
      __map(_r => _r.body as CategoryDto)
    );
  }

  /**
   * Enregistrer un client
   *
   * Cette methode permet d'enregistrer ou modifier un client
   * @return L'objet client creer / modifier
   */
  saveClientResponse(clientDto: ClientDto): __Observable<__StrictHttpResponse<ClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = clientDto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/clients/create`,
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
   * Enregistrer un client
   *
   * Cette methode permet d'enregistrer ou modifier un client
   * @return L'objet client creer / modifier
   */
  saveClient(clientDto: ClientDto): __Observable<ClientDto> {
    return this.saveClientResponse(clientDto).pipe(
      __map(_r => _r.body as ClientDto)
    );
  }

  /**
   * @return successful operation
   */
  findAllCommandeClientResponse(): __Observable<__StrictHttpResponse<Array<CommandeClientDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/commandesclients/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CommandeClientDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAllCommandeClient(): __Observable<Array<CommandeClientDto>> {
    return this.findAllCommandeClientResponse().pipe(
      __map(_r => _r.body as Array<CommandeClientDto>)
    );
  }

  /**
   * @return successful operation
   */
  saveCommandeClientResponse(commandeClientDto: CommandeClientDto): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = commandeClientDto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/commandesclients/create`,
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
   * @return successful operation
   */
  saveCommandeClient(commandeClientDto: CommandeClientDto): __Observable<CommandeClientDto> {
    return this.saveCommandeClientResponse(commandeClientDto).pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * @return successful operation
   */
  updateClientInCommandeClientResponse(idCommande: string, idClient: string): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondestock/v1/commandesclients/update/client/${encodeURIComponent(String(idCommande))}/${encodeURIComponent(String(idClient))}`,
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
   * @return successful operation
   */
  updateClientInCommandeClient(idCommande:string, idClient: string): __Observable<CommandeClientDto> {
    return this.updateClientInCommandeClientResponse(idCommande, idClient).pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * @return successful operation
   */
  updateQuantiteCommandeClientResponse(idCommande:string, idLigneCommande: string, quantite:string): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondestock/v1/commandesclients/update/quantite/${encodeURIComponent(String(idCommande))}/${encodeURIComponent(String(idLigneCommande))}/${encodeURIComponent(String(quantite))}`,
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
   * @return successful operation
   */
  updateQuantiteCommandeClient(idCommande:string, idLigneCommande: string, quantite: string): __Observable<CommandeClientDto> {
    return this.updateQuantiteCommandeClientResponse(idCommande, idLigneCommande, quantite).pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * @return successful operation
   */
  findCommandeClientByCodeResponse(codeCommandeClient: string): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/commandesclients/${encodeURIComponent(String(codeCommandeClient))}`,
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
   * @return successful operation
   */
  findCommandeClientByCode(codeCommandeClient: string): __Observable<CommandeClientDto> {
    return this.findCommandeClientByCodeResponse(codeCommandeClient).pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * @return successful operation
   */
  saveCommandeFournisseurResponse(commandeFournisseurDto: CommandeClientDto): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = commandeFournisseurDto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/commandesfournisseurs/create`,
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
   * @return successful operation
   */
  saveCommandeFournisseur(commandeFournisseurDto: CommandeClientDto): __Observable<CommandeFournisseurDto> {
    return this.saveCommandeFournisseurResponse(commandeFournisseurDto).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * @return successful operation
   */
  updateArticleInCommandeFournisseurResponse(idCommande:string, idLigneCommande:string, idArticle:string): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondestock/v1/commandesfournisseurs/update/article/${encodeURIComponent(String(idCommande))}/${encodeURIComponent(String(idLigneCommande))}/${encodeURIComponent(String(idArticle))}`,
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
   * @return successful operation
   */
  updateArticleInCommandeFournisseur(idCommande:string, idLigneCommande:string, idArticle:string): __Observable<CommandeFournisseurDto> {
    return this.updateArticleInCommandeFournisseurResponse(idCommande, idLigneCommande, idArticle).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * @return successful operation
   */
  updateFournisseurInCommandeFournisseurResponse(idCommande:string, idFournisseur:string): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondestock/v1/commandesfournisseurs/update/fournisseur/${encodeURIComponent(String(idCommande))}/${encodeURIComponent(String(idFournisseur))}`,
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
   * @return successful operation
   */
  updateFournisseurInCommandeFournisseur(idCommande:string, idFournisseur:string): __Observable<CommandeFournisseurDto> {
    return this.updateFournisseurInCommandeFournisseurResponse(idCommande, idFournisseur).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * @return successful operation
   */
  findCommandeFournisseurByCodeResponse(codeCommandeFoutnisseur: string): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/commandesfournisseurs/${encodeURIComponent(String(codeCommandeFoutnisseur))}`,
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
   * @return successful operation
   */
  findCommandeFournisseurByCode(codeCommandeFoutnisseur: string): __Observable<CommandeFournisseurDto> {
    return this.findCommandeFournisseurByCodeResponse(codeCommandeFoutnisseur).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * @return successful operation
   */
  findCommandeFournisseurByIdResponse(idCommandeFournisseur: string): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/commandesfournisseurs/${encodeURIComponent(String(idCommandeFournisseur))}`,
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
   * @return successful operation
   */
  findCommandeFournisseurById(idCommandeFournisseur: string): __Observable<CommandeFournisseurDto> {
    return this.findCommandeFournisseurByIdResponse(idCommandeFournisseur).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * @return successful operation
   */
  findAllEntrepriseResponse(): __Observable<__StrictHttpResponse<Array<EntrepriseDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/entreprises/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<EntrepriseDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAllEntreprise(): __Observable<Array<EntrepriseDto>> {
    return this.findAllEntrepriseResponse().pipe(
      __map(_r => _r.body as Array<EntrepriseDto>)
    );
  }

  /**
   * @return successful operation
   */
  findEntrepriseByIdResponse(idEntreprise: string): __Observable<__StrictHttpResponse<EntrepriseDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/entreprises/${encodeURIComponent(String(idEntreprise))}`,
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
   * @return successful operation
   */
  findEntrepriseById(idEntreprise:string): __Observable<EntrepriseDto> {
    return this.findEntrepriseByIdResponse(idEntreprise).pipe(
      __map(_r => _r.body as EntrepriseDto)
    );
  }

  /**
   * @return successful operation
   */
  saveFournisseurResponse(fournisseurDto: FournisseurDto): __Observable<__StrictHttpResponse<FournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = fournisseurDto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/fournisseurs/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FournisseurDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  saveFournisseur(fournisseurDto: FournisseurDto): __Observable<FournisseurDto> {
    return this.saveFournisseurResponse(fournisseurDto).pipe(
      __map(_r => _r.body as FournisseurDto)
    );
  }

  /**
   * @return successful operation
   */
  findFournisseurByIdResponse(idFournisseur:number): __Observable<__StrictHttpResponse<FournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = idFournisseur;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/fournisseurs/${encodeURIComponent(Number(idFournisseur))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FournisseurDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findFournisseurById(idFournisseur: number): __Observable<FournisseurDto> {
    return this.findFournisseurByIdResponse(idFournisseur).pipe(
      __map(_r => _r.body as FournisseurDto)
    );
  }

  /**
   * @return successful operation
   */
  correctionStockNegResponse(): __Observable<__StrictHttpResponse<MouvementStockDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/mvtstk/correctionneg`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MouvementStockDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  correctionStockNeg(): __Observable<MouvementStockDto> {
    return this.correctionStockNegResponse().pipe(
      __map(_r => _r.body as MouvementStockDto)
    );
  }

  /**
   * @return successful operation
   */
  sortieStockResponse(mvt: MouvementStockDto): __Observable<__StrictHttpResponse<MouvementStockDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = mvt;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/mvtstk/sortie`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MouvementStockDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  sortieStock(mvt: MouvementStockDto): __Observable<MouvementStockDto> {
    return this.sortieStockResponse(mvt).pipe(
      __map(_r => _r.body as MouvementStockDto)
    );
  }

  /**
   * @return successful operation
   */
  stockReelArticleResponse(idArticle: string): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/mvtstk/stockreel/${encodeURIComponent(String(idArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: parseFloat((_r as HttpResponse<any>).body as string) }) as __StrictHttpResponse<number>
      })
    );
  }
  /**
   * @return successful operation
   */
  stockReelArticle(idArticle:string): __Observable<number> {
    return this.stockReelArticleResponse(idArticle).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @return successful operation
   */
  findAllUtilisateurResponse(): __Observable<__StrictHttpResponse<Array<UtilisateurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/utilisateurs/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UtilisateurDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAllUtilisateur(): __Observable<Array<UtilisateurDto>> {
    return this.findAllUtilisateurResponse().pipe(
      __map(_r => _r.body as Array<UtilisateurDto>)
    );
  }

  /**
   * @return successful operation
   */
  saveUtilisateurResponse(): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/utilisateurs/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  saveUtilisateur(): __Observable<UtilisateurDto> {
    return this.saveUtilisateurResponse().pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * @return successful operation
   */
  findUtilisateurByIdResponse(idUtilisateur:string): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/utilisateurs/${encodeURIComponent(String(idUtilisateur))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findUtilisateurById(idUtilisateur:string): __Observable<UtilisateurDto> {
    return this.findUtilisateurByIdResponse(idUtilisateur).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * @return successful operation
   */
  saveVenteResponse(): __Observable<__StrictHttpResponse<VentesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/ventes/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<VentesDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  saveVente(): __Observable<VentesDto> {
    return this.saveVenteResponse().pipe(
      __map(_r => _r.body as VentesDto)
    );
  }
  deleteVenteResponse(idVente:string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/ventes/delete/${encodeURIComponent(String(idVente))}`,
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
  }  deleteVente(idVente:string): __Observable<null> {
    return this.deleteVenteResponse(idVente).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @return successful operation
   */
  findVenteByIdResponse(idVente:string): __Observable<__StrictHttpResponse<VentesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/ventes/${encodeURIComponent(String(idVente))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<VentesDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findVenteById(idVente:string): __Observable<VentesDto> {
    return this.findVenteByIdResponse(idVente).pipe(
      __map(_r => _r.body as VentesDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  authenticateResponse(body?: AuthenticationRequest): __Observable<__StrictHttpResponse<AuthenticationResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      'http://localhost:8081/' + `gestiondestock/v1/auth/authenticate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthenticationResponse>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  authenticate(body?: AuthenticationRequest): __Observable<AuthenticationResponse> {
    return this.authenticateResponse(body).pipe(
      __map(_r => _r.body as AuthenticationResponse)
    );
  }
}

module ApiService {
}

export { ApiService }
