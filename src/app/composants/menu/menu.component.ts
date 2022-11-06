import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuProperties: Array<Menu> = [
    {
    id: '1',
    titre: 'Tableau de bord',
    icon: 'fa-solid fa-chart-line',
    url: 'home',
    sousMenu: [
      {
        id: '11',
        titre: 'Home',
        icon: 'fa-solid fa-house',
        url: 'home'
      },
      {
        id: '12',
        titre: 'Profil',
        icon: 'fa-solid fa-user',
        url: 'profil'
      },
      {
        id: '13',
        titre: 'Statistiques',
        icon: 'fa-solid fa-chart-simple',
        url: 'statistiques'
      },
    ]
  },
  {
    id: '2',
    titre: 'Articles',
    icon: 'fa-solid fa-box-open',
    url: '',
    sousMenu: [
        {
          id: '21',
          titre: 'Articles',
          icon: 'fa-solid fa-toolbox',
          url: 'articles'
        },
        {
          id: '22',
          titre: 'Mouvement du stock',
          icon: 'fa-solid fa-cubes',
          url: 'mvtstk'
        }
    ]
  },
  {
    id: '3',
    titre: 'Clients',
    icon: 'fa-solid fa-users',
    url: '',
    sousMenu: [
        {
          id: '31',
          titre: 'Clients',
          icon: 'fa-solid fa-user',
          url: 'clients'
        },
        {
          id: '32',
          titre: 'Commandes clients',
          icon: 'fa-solid fa-cart-plus',
          url: 'commandesclient'
        }
    ]
  },
  {
    id: '4',
    titre: 'Fournisseurs',
    icon: 'fa-solid fa-users',
    url: '',
    sousMenu: [
        {
          id: '41',
          titre: 'Fournisseurs',
          icon: 'fa-solid fa-truck',
          url: 'fournisseurs'
        },
        {
          id: '42',
          titre: 'Commandes fournisseurs',
          icon: 'fa-solid fa-layer-group',
          url: 'commandesfournisseur'
        }
    ]
  },
  {
    id: '5',
    titre: 'Parametrages',
    icon: 'fa-solid fa-gears',
    url: '',
    sousMenu: [
        {
          id: '51',
          titre: 'Categories',
          icon: 'fa-solid fa-compass-drafting',
          url: 'categories'
        }
    ]
  }
];

  private lastSelectedMenu: Menu | undefined;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  navigate(menu: Menu): void {
    if (this.lastSelectedMenu) {
      this.lastSelectedMenu.active = false;
    }
    menu.active = true;
    this.router.navigate([menu.url]);
    this.lastSelectedMenu = menu;
  }

}
