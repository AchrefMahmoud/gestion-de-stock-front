/* tslint:disable */
import { ArticleDto } from './article-dto';
export interface MouvementStockDto {
  article?: ArticleDto;
  dateMvt?: number;
  id?: number;
  idEntreprise?: number;
  quantite?: number;
  sourceMvt?: 'COMMANDE_CLIENT' | 'COMMANDE_FOURNISSEUR' | 'VENTE';
  typemvt?: 'ENTREE' | 'SORTIE' | 'CORRECTION_POS' | 'CORRECTION_NEG';
}
