import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CategoryDto } from 'src/gs-api/src/models';
import { ApiService, CategoriesService } from 'src/gs-api/src/services';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private userService: UserService,
    private categoryService: CategoriesService,
    private categoryServiceBis: ApiService
  ) { }

  enregistrerCategory(categoryDto: CategoryDto): Observable<CategoryDto> {
    categoryDto.idEntreprise = this.userService.getConnectedUser()?.entreprise?.id;
    return this.categoryServiceBis.saveCategory(categoryDto);
  }

  findAll(): Observable<CategoryDto[]> {
    return this.categoryService.findAllCategory();
  }

  findById(idCategory: number): Observable<CategoryDto> {
    return this.categoryServiceBis.findCategoryById(idCategory);
  }

  delete(idCategorie?: number): Observable<any> {
    if (idCategorie) {
      return this.categoryServiceBis.deleteCategory(idCategorie);
    }
    return of();
  }

}
