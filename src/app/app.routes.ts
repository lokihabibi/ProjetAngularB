import { Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ContactComponent } from './Contact/contact/contact.component';
import { ErreurComponent } from './Erreur/erreur/erreur.component';
import { RingComponent } from './Product/ring/ring.component';
import { NecklaceComponent } from './Product/necklace/necklace.component';
import { NeclaceSelectedComponent } from './Product/neclace-selected/neclace-selected.component';
import { PanierComponent } from './panier/panier.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SearchComponent } from './search/search.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { BraceletComponent } from './Product/bracelet/bracelet.component';
import { BraceletSelectedComponent } from './Product/bracelet-selected/bracelet-selected.component';
import { loginGuard } from './login.guard';
import { PageAdminComponent } from './admin/page-admin/page-admin.component';
import { ProductAdminComponent } from './admin/product-admin/product-admin.component';
import { AddProductComponent } from './admin/add-product/add-product.component';

export const routes: Routes = [
    {path:'home' , title:' Home', component:AcceuilComponent },
    {path:'ring' , title:' Ring', component:RingComponent},
    {path:'necklace' , title:' Neckklace', component:NecklaceComponent},
    {path:'bracelet' , title:' Bracelets', component:BraceletComponent},
    {path:'necklace/:idn' , title:' Necklace', component:NeclaceSelectedComponent},
    {path:'bracelet/:idn' , title:' Bracelet', component:BraceletSelectedComponent},
    {path:'contact' , title:'contact', component:ContactComponent},
    {path:'about' , title:'AboutUs', component:AboutusComponent},
    {path:'panier' , title:' Panier', component:PanierComponent},
    {path:'search' , title:' search', component:SearchComponent},
    {path:'admin' , title:' ADMIN', component:PageAdminComponent, canActivate: [loginGuard],
        children:[
            // {path:'dashboard' , title:'DashboardAdmin', component:},
            {path:'product' , title:'Produit', component:ProductAdminComponent},
            {path:'addProduct' , title:'ProduitAjout', component:AddProductComponent},

        ]
    },

    {path:'login' , title:' login', component:PageLoginComponent},
    {path:'', redirectTo:'home',pathMatch:'full'},
    {path:'**' ,title:" Error" , component:ErreurComponent}


];
