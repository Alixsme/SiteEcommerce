import { NgModule } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';





import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { HttpInterceptorBasicAuthService } from './service/http-interceptor-basic-auth.service';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AppRoutingModule } from './app-routing.module';
import { PagePrincipaleComponent } from './page-principale/page-principale.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { SingleProduitComponent } from './single-produit/single-produit.component';
import { ModifierCategorieComponent } from './modifier-categorie/modifier-categorie.component';
import { AjouterCategorieComponent } from './ajouter-categorie/ajouter-categorie.component';
import { SingleCategorieComponent } from './single-categorie/single-categorie.component';
import { ProduitsAssociesComponent } from './produits-associes/produits-associes.component';
import { ListePanierComponent } from './liste-panier/liste-panier.component';
import { ListeLignePanierComponent } from './liste-ligne-panier/liste-ligne-panier.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ModifierPanierComponent } from './modifier-panier/modifier-panier.component';
import { RechercherProduitComponent } from './rechercher-produit/rechercher-produit.component';
import { ListeLigneCommandeComponent } from './liste-ligne-commande/liste-ligne-commande.component';
import { ListeCommandeComponent } from './liste-commande/liste-commande.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AuthentificationComponent,
    PagePrincipaleComponent,
    ListeProduitsComponent,
    ListeCategoriesComponent,
    ModifierProduitComponent,
    AjouterProduitComponent,
    SingleProduitComponent,
    ModifierCategorieComponent,
    AjouterCategorieComponent,
    SingleCategorieComponent,
    ProduitsAssociesComponent,
    ListePanierComponent,
    ListeLignePanierComponent,
    InscriptionComponent,
    ModifierPanierComponent,
    RechercherProduitComponent,
    ListeLigneCommandeComponent,
    ListeCommandeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:HttpInterceptorBasicAuthService,multi:true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
