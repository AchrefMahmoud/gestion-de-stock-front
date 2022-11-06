/* tslint:disable */
import { ClientDto } from './client-dto';
export interface CommandeClientDto {
  client?: ClientDto;
  code?: string;
  commandeLivree?: boolean;
  dateCommande?: string;
  etatCommande?: 'EN_PREPARATION' | 'VALIDER' | 'LIVREE';
  id?: number;
  idEntreprise?: number;
}
