import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CategoryService } from 'src/app/services/category/category.service';
import { CategoryDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-nouvelle-category',
  templateUrl: './nouvelle-category.component.html',
  styleUrls: ['./nouvelle-category.component.scss']
})
export class NouvelleCategoryComponent implements OnInit {
  
  categoryDto: CategoryDto = {};

  errorMsg: Array<string> = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
     private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    const idCategory = this.activatedRoute.snapshot.params['idCategory'];
    if (idCategory) {
      this.categoryService.findById(idCategory)
      .subscribe(cat => {
        this.categoryDto = cat;
      });
    }
  }

  cancelClick(): void {
    this.router.navigate(['categories']);
  }

  enregistrerCategory(): void {
    console.log(this.categoryDto)
    this.categoryService.enregistrerCategory(this.categoryDto)
    .subscribe(res => {
      Swal.fire({
        icon: 'success',
        title: 'Une nouvelle categorie a été ajouté',
        showConfirmButton: false,
        timer: 2000
      })
      this.router.navigate(['categories']);
    }, error => {
      this.errorMsg = error.error.errors;
    });
  }

}
