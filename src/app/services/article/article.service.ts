import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ArticleDto } from 'src/gs-api/src/models';
import { ApiService, ArticlesService } from 'src/gs-api/src/services';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private userService: UserService,
    private articlesServices: ArticlesService,
    private articlesServicesBis: ApiService
  ) { }

  enregistrerArticle(articleDto: ArticleDto): Observable<ArticleDto> {
    return this.articlesServices.saveArticle(articleDto);
  }

  findAllArticles(): Observable<ArticleDto[]> {
    return this.articlesServices.findAllArticle();
  }

  findArticleById(idArticle?: number): Observable<ArticleDto> {
    if (idArticle) {
      return this.articlesServicesBis.findArticleById(idArticle);
    }
    return of();
  }

  deleteArticle(idArticle: number): Observable<any> {
    if (idArticle) {
      this.articlesServicesBis.deleteArticle(idArticle);
    }
    return of();
  }

  findArticleByCode(codeArticle: string): Observable<ArticleDto> {
    return this.articlesServicesBis.findArticleByCodeArticle(codeArticle);
  }
}
