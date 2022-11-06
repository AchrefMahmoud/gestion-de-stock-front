import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article/article.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { UserService } from 'src/app/services/user/user.service';
import { ArticleDto, CategoryDto } from 'src/gs-api/src/models';
import { PhotosService } from 'src/gs-api/src/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nouvel-article',
  templateUrl: './nouvel-article.component.html',
  styleUrls: ['./nouvel-article.component.scss']
})
export class NouvelArticleComponent implements OnInit {

  articleDto: ArticleDto = {};
  categoryDto: CategoryDto = {};
  listCategorie: Array<CategoryDto> = [];
  errorMsg: Array<string> = [];
  file: File | null = null;
  imgUrl: string | ArrayBuffer = 'assets/product.png'

  constructor(
    private router: Router,
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private userService: UserService,
    private photoService: PhotosService
  ) { }

  ngOnInit(): void {
    this.categoryService.findAll()
    .subscribe(categories => {
      this.listCategorie = categories;
    });

    const idArticle = this.activatedRoute.snapshot.params['idArticle'];
    if (idArticle) {
      this.articleService.findArticleById(idArticle)
      .subscribe(article => {
        this.articleDto = article;
        this.categoryDto = this.articleDto.category ? this.articleDto.category : {};
      });
    }
  }

  cancelClick(): void {
    this.router.navigate(['articles']);
  }

  enregistrerArticle(): void {
    this.articleDto.category = this.categoryDto;
    this.articleDto.idEntreprise = this.userService.getConnectedUser().entreprise?.id;
    this.articleService.enregistrerArticle(this.articleDto)
    .subscribe(art => {
//      this.router.navigate(['articles']);
      this.savePhoto(art.id, art.codeArticle);
      Swal.fire({
        icon: 'success',
        title: 'Votre article a été ajouté',
        showConfirmButton: false,
        timer: 2000
      })
    }, error => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: this.errorMsg = error.error.errors,
      });
    });
  }

  calculerTtc(): void {
    if (this.articleDto.prixUnitaireHt && this.articleDto.tauxTVA) {
      // la formule du prix Ttc: prixHt + (prixHt * (tauxTva / 100))
      this.articleDto.prixUnitaireTtc = 
          +this.articleDto.prixUnitaireHt + (+(this.articleDto.prixUnitaireHt * (this.articleDto.tauxTVA / 100)));
    }
  }

  onFileInput(files: FileList | null): void {
    if (files) {
      this.file = files.item(0);
      if (this.file) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(this.file);
        fileReader.onload = (event) => {
          if (fileReader.result) {
          this.imgUrl = fileReader.result;
          }
        };
      }
    }
  }


  savePhoto(idArticle?: number, titre?: string): void {
    console.log(this.file);
    if (idArticle && titre && this.file) {
      const params = {
        id: idArticle,
        file: this.file,
        title: titre,
        context: 'article'
      };
      this.photoService.savePhoto(this.file, idArticle, titre, 'article')
      .subscribe(res => {
        this.router.navigate(['articles']);
      });
    } else {
      this.router.navigate(['articles']);
    }


  } 

}
