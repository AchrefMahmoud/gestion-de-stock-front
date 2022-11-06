/* tslint:disable */
import { FournisseurDto } from './fournisseur-dto';
import { LigneCommandeFournisseurDto } from './ligne-commande-fournisseur-dto';
export interface CommandeFournisseurDto {
  code?: string;
  commandeLivree?: boolean;
  dateCommande?: string;
  etatCommande?: 'EN_PREPARATION' | 'VALIDER' | 'LIVREE';
  fournisseur?: FournisseurDto;
  id?: number;
  idEntreprise?: number;
  ligneCommandeFournisseurs?: Array<LigneCommandeFournisseurDto>;
}
