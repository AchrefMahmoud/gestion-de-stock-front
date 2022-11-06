/* tslint:disable */
import { EntrepriseDto } from './entreprise-dto';
import { RoleDto } from './role-dto';
export interface UtilisateurDto {
  adresse?: string;
  codePostale?: string;
  dateDeNaissance?: number;
  entreprise?: EntrepriseDto;
  id?: number;
  idEntreprise?: number;
  mail?: string;
  motDePasse?: string;
  nom?: string;
  pays?: string;
  photo?: string;
  prenom?: string;
  roles?: Array<RoleDto>;
  ville?: string;
}
