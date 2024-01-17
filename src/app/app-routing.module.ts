import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './tp5/list-user/list-user.component';
import { ContactComponent } from './tp5/contact/contact.component';
import { HomeComponent } from './tp5/home/home.component';
/*****************  Component  ************** */

import { AddProduitComponent } from './tp4/add-produit/add-produit.component';
import { AddUserComponent } from './tp5/add-user/add-user.component';
import { ProduitsComponent } from './tp4/produits/produits.component';

/*****************  TP6  ************** */

import { LoginComponent } from './tp6/login/login.component';
import { NewCompteComponent } from './tp6/new-compte/new-compte.component';

/*****************  TP7  ************** */

import { MoviesComponent } from './tp7/movies/movies.component';

const routes: Routes = [
  { path: '', redirectTo: '/Produit', pathMatch: 'full' },
  { path: 'Produit', component: ProduitsComponent },
  { path: 'AddProd', component: AddProduitComponent },
  { path: 'AddUser', component: AddUserComponent },
  { path: 'ListUsers', component: ListUserComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: NewCompteComponent },
  { path: 'Movies', component: MoviesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
