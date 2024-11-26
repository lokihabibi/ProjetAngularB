import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../Class/prouduct';
import { Client } from '../Class/client';
import { identifierName } from '@angular/compiler';

const API_URL = "http://localhost:3000/products";
const API_client = "http://localhost:3200/client";
@Injectable({
  providedIn: 'root'
})
export class ProductSericeService {
  private readonly http: HttpClient = inject(HttpClient);
 
  public getProduts(sectionName:string): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL+"?sectionName="+sectionName);
  }



  public addProduct(p: Product): Observable<Client> {
    const client: Client = {
      nom: '',
      prenom: '',
      mdp: '',
      nomUtilisateur: '',
      products: [p],
      commentaire: []
    };

    return this.http.post<Client>(API_client, client);
  }
  public getClient(): Observable<Client[]> {
    return this.http.get<Client[]>(API_client);
  }


  public searchProductByName(name: string): Observable<Product[]> {
    return this.getProduts("").pipe(
      map((products: Product[]) =>
        products.filter(product =>
          product.name.toLowerCase().includes(name.toLowerCase())
        )
      )
    );
  }

  public getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`api/products/${id}`);
  }
  
  


  public editProduit(id:number,data:any):Observable<Product>
  {return this.http.patch<Product>(API_URL+"/"+id,data)}
  


  public deleteProduit(id:number)
  {
    return this.http.delete(API_URL+"/"+id)
  };
}
