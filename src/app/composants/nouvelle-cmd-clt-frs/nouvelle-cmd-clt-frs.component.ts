import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article/article.service';
import { CltfrsService } from 'src/app/services/cltfrs/cltfrs.service';
import { CmdCltFrsService } from 'src/app/services/cmdCltFrs/cmd-clt-frs.service';
import { ArticleDto, ClientDto, CommandeClientDto, CommandeFournisseurDto, LigneCommandeClientDto, MouvementStockDto } from 'src/gs-api/src/models';
import { ApiService, CommandesclientsService, MvtstkService } from 'src/gs-api/src/services';

@Component({
  selector: 'app-nouvelle-cmd-clt-frs',
  templateUrl: './nouvelle-cmd-clt-frs.component.html',
  styleUrls: ['./nouvelle-cmd-clt-frs.component.scss']
})
export class NouvelleCmdCltFrsComponent implements OnInit {

  origin = '';
  selectedClientFournisseur: any = {};
  listClientsFournisseurs: Array<any> = [];
  searchedArticle: ArticleDto = {};
  listArticle: Array<ArticleDto> = [];
  articleErrorMsg = '';
  codeArticle = '';
  quantite = '';
  codeCommande = '';

  lignesCommande: Array<any> = []
  totaleCommande = 0;
  articleNotYetSelected = false;
  errorMsg: Array<string> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private cltFrsService: CltfrsService,
    private articleService: ArticleService,
    private cmdCltFrsService: CmdCltFrsService,
    private router: Router,
    private mvtstkService: MvtstkService,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.origin = data?.['origin'];
    });
    this.findAll();
    this.findAllArticles();
  }

  findAll():void {
    if (this.origin === 'client') {
      this.cltFrsService.findAllClients()
      .subscribe(clients => {
        this.listClientsFournisseurs = clients;
      });
    } else if (this.origin === 'fournisseur') {
      this.cltFrsService.findAllFournsseur()
      .subscribe(fournisseurs => {
        this.listClientsFournisseurs = fournisseurs;
      })
    }

  }

  findAllArticles(): void {
    this.articleService.findAllArticles()
    .subscribe(articles => {
      this.listArticle = articles;
    });
  }

  findArticleByCode(codeArticle: string): void {
    this.articleErrorMsg = '';
    if (codeArticle) {
      this.articleService.findArticleByCode(codeArticle)
      .subscribe(article => {
        this.searchedArticle = article;
      }, error => {
        this.articleErrorMsg = error.error.message;
      });
    }
  }

  filterArticle(): void {
    if (this.codeArticle.length == 0 ) {
      this.findAllArticles();
    }
    this.listArticle = this.listArticle.
    filter(art => art.codeArticle?.includes(this.codeArticle) || art.designation?.includes(this.codeArticle));
  }

  ajouterLigneCommande(): void {
    this.checkLigneCommande();
    this.calculerTotalCommande();

    this.searchedArticle = {};
    this.quantite = '';
    this.codeArticle = '';
    this.articleNotYetSelected = false;
    this.findAllArticles();
  }
  
  calculerTotalCommande() {
    this.totaleCommande = 0;
    this.lignesCommande.forEach(ligne => {
      if (ligne.prixUnitaire && ligne.quantite) {
        this.totaleCommande += +ligne.prixUnitaire * +ligne.quantite;
      }
    });
  }
  
  private checkLigneCommande(): void {
    const ligCmdAlreadyExists = this.lignesCommande.find(lig => lig.article?.codeArticle === this.searchedArticle.codeArticle);
    if (ligCmdAlreadyExists) {
      this.lignesCommande.forEach(lig => {
        if (lig && lig.article?.codeArticle === this.searchedArticle.codeArticle) {
          //@ts-ignore
          lig.quantite = +lig.quantite + +this.quantite;
        }
      });
    } else {
      const ligneCmd: LigneCommandeClientDto = {
        article: this.searchedArticle,
        prixUnitaire: this.searchedArticle.prixUnitaireTtc,
        quantite: +this.quantite
      };
      this.lignesCommande.push(ligneCmd);
    }
    
  }
  
  selectArticle(article: ArticleDto): void {
    this.searchedArticle = article;
    this.codeArticle = article.codeArticle ? article.codeArticle : '';
    this.articleNotYetSelected = true;
  }

  enregistrerCommande(): void {
   const commande = this.preparerCommande();
   const mouvementstk: MouvementStockDto= this.creerMouvementStk(commande);
   if (this.origin == 'client') {
    this.cmdCltFrsService.enregistrerCommandeClient(commande as CommandeClientDto)
    .subscribe(cmd => {
/*      this.apiService.sortieStock(mouvementstk).subscribe( 
        succes => {
          this.router.navigate(['commandesclient']);
        }
      )*/
      this.router.navigate(['commandesclient']);
    }, error => {
      this.errorMsg = error.error.errors;
    });
   } else if (this.origin === 'fournisseur') {
    this.cmdCltFrsService.enregistrerCommandeFournisseur(commande as CommandeFournisseurDto)
    .subscribe(cmd => {
/*      this.mvtstkService.entreeStock(mouvementstk).subscribe( 
        succes => {
          this.router.navigate(['commandesfournisseur'])
        }
      )*/
      this.router.navigate(['commandesfournisseur'])
    }, error => {
      this.errorMsg = error.error.errors
    }
    );
   }
  } 

  private preparerCommande(): any {
    if (this.origin === 'client') {
      return {
        client: this.selectedClientFournisseur,
        code: this.codeCommande,
        dateCommande: new Date().getTime(),
        etatCommande: 'EN_PREPARATION',
        ligneCommandeClients: this.lignesCommande,
      };
    } else if (this.origin === 'fournisseur') {
      return {
        fournisseur: this.selectedClientFournisseur,
        code: this.codeCommande,
        dateCommande: new Date().getTime(),
        etatCommande: 'EN_PREPARATION',
        ligneCommandeFournisseurs: this.lignesCommande,
      }
    }
  }  
  
  
  creerMouvementStk (commande: any): any {
    if (this.origin === 'client') {
      const mouvementCmd: MouvementStockDto = {
        article: commande.ligneCommandeClients.article, 
        dateMvt: commande.dateCommande, 
        idEntreprise: commande.ligneCommandeClients.idEntreprise, 
        quantite: commande.ligneCommandeClients.quantite, 
        sourceMvt: "COMMANDE_CLIENT", 
        typemvt: "SORTIE"
      }
      return mouvementCmd;
    }
    else if (this.origin === 'fournisseur') {
      const mouvementCmd: MouvementStockDto = {
        article: commande.ligneCommandeFournisseurs.article, 
        dateMvt: commande.dateCommande, 
        idEntreprise: commande.ligneCommandeFournisseurs.idEntreprise, 
        quantite: commande.ligneCommandeFournisseurs.quantite, 
        sourceMvt: "COMMANDE_FOURNISSEUR", 
        typemvt: "ENTREE"
    }
    return mouvementCmd;
  }
  }

  
  cancelClick(): void {
    if (this.origin === 'client') {
      this.router.navigate(['commandesclient'])
    } else if (this.origin == 'fournisseur') {
      this.router.navigate(['commandesfournisseur'])
    }
  }
}
