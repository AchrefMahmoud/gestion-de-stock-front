/* tslint:disable */
import { LigneVenteDto } from './ligne-vente-dto';
export interface VentesDto {
  code?: string;
  commentaire?: string;
  dateVente?: string;
  id?: number;
  idEntreprise?: number;
  ligneVentes?: Array<LigneVenteDto>;
}
