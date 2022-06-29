import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterCategorieComponent } from './ajouter-categorie/ajouter-categorie.component';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';


import { AuthentificationComponent } from './authentification/authentification.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { ListeCommandeComponent } from './liste-commande/liste-commande.component';
import { ListePanierComponent } from './liste-panier/liste-panier.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { ModifierCategorieComponent } from './modifier-categorie/modifier-categorie.component';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';
import { PagePrincipaleComponent } from './page-principale/page-principale.component';
import { ProduitsAssociesComponent } from './produits-associes/produits-associes.component';
import { RechercherProduitComponent } from './rechercher-produit/rechercher-produit.component';
import { SingleCategorieComponent } from './single-categorie/single-categorie.component';
import { SingleProduitComponent } from './single-produit/single-produit.component';



const routes: Routes = [
 
  {path:'',component:AuthentificationComponent},
  {path:'accueil',component:PagePrincipaleComponent},

  {path:'afficherCategories',component:ListeCategoriesComponent},
  {path:'afficherUneCategorie/:idCategorie',component:SingleCategorieComponent},
  {path:'modifierCategorie/:idCategorie',component:ModifierCategorieComponent},
  {path:'ajouterCategorie',component:AjouterCategorieComponent},
  {path:'ProduitsAssocies/:idCategorie',component:ProduitsAssociesComponent},
  
  {path:'afficherProduits',component:ListeProduitsComponent},
  {path:'afficherUnProduit/:idProduit',component:SingleProduitComponent},
  {path:'modifierProduit/:idProduit',component:ModifierProduitComponent},
  {path:'ajouterProduit',component:AjouterProduitComponent},
  {path:'rechercher/:libProduit',component:RechercherProduitComponent},

  {path:'afficherCommandes',component:ListeCommandeComponent},
  

  
  {path:'modifierLignePanier/:idLignePanier',component:ModifierProduitComponent},  
  

  {path:'Inscription',component:InscriptionComponent},
  
  {path:'afficherPanier',component:ListePanierComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
