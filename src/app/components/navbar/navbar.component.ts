import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Produit',
        icon: 'pi pi-fw pi-file',
        routerLink: 'Produit',
      },
      {
        label: 'Add Product ',
        icon: 'pi pi-fw pi-external-link',
        routerLink: 'AddProd',
      },
      {
        label: 'Add User',
        icon: 'pi pi-fw pi-file',
        routerLink: 'AddUser',
      },
      {
        label: 'List User',
        icon: 'pi pi-fw pi-file',
        routerLink: 'ListUsers',
      },
      {
        label: 'Movies TP7',
        icon: 'pi pi-fw pi-file',
        routerLink: 'Movies',
      },
    ];
  }
}
