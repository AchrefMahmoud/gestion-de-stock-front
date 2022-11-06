import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CategoryService } from 'src/app/services/category/category.service';
import { CategoryDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-page-categories',
  templateUrl: './page-categories.component.html',
  styleUrls: ['./page-categories.component.scss']
})
export class PageCategoriesComponent implements OnInit {

  listCategories: Array<CategoryDto> = [];
  categoryDto: CategoryDto = {};
  selectedCatIdToDelete? = -1;
  errorMsgs = '';

  constructor(
    private router:Router,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.findAllCategories();
  }

  findAllCategories(): void {
    this.categoryService.findAll()
    .subscribe(res => {
      this.listCategories = res;
    });
  }

  nouvelleCategory(): void {
    this.router.navigate(['nouvellecategorie']);
  }

  modifierCategory(id?: number): void {
    this.router.navigate(['nouvellecategorie/', id]);
  }

  confirmerEtSupprimerCat(): void {
    if(this.selectedCatIdToDelete !== -1) {
      this.categoryService.delete(this.selectedCatIdToDelete)
      .subscribe(res => {
        Swal.fire({
          icon: 'success',
          title: 'Une categorie a été supprimé',
          showConfirmButton: false,
          timer: 2000
        })
        this.findAllCategories()
      }, error  => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: this.errorMsgs = error.error.message,
        });
      });
    }
  }

  annulerSuppressionCat(): void {
    this.selectedCatIdToDelete = -1;
  }

  selectCatPourSupprimer(id?: number): void {
    this.selectedCatIdToDelete = id;
    console.log(this.selectedCatIdToDelete);
  }

}
