/* tslint:disable */
import { UtilisateurDto } from './utilisateur-dto';
export interface EntrepriseDto {
  adresse?: string;
  codeFiscal?: string;
  codePostale?: string;
  description?: string;
  id?: number;
  mail?: string;
  nom?: string;
  numTel?: string;
  pays?: string;
  photo?: string;
  siteWeb?: string;
  utilisateurs?: Array<UtilisateurDto>;
  ville?: string;
}
