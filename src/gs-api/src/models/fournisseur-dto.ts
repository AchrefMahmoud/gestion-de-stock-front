/* tslint:disable */
import { CommandeFournisseurDto } from './commande-fournisseur-dto';
export interface FournisseurDto {
  adresse?: string;
  codePostale?: string;
  commandeFournisseurs?: Array<CommandeFournisseurDto>;
  id?: number;
  idEntreprise?: number;
  mail?: string;
  nom?: string;
  numTel?: string;
  pays?: string;
  photo?: string;
  prenom?: string;
  ville?: string;
}
