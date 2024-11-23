import { Component,inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../Class/prouduct';
import { ProductSericeService } from '../../Service/product-serice.service';
import { FooterComponent } from '../../Footer/footer/footer.component';
import { HeaderComponent } from '../../Header/header/header.component';
import { CurrencyPipe } from '@angular/common';
import { DinarPipe } from '../../dinar.pipe';

@Component({
  selector: 'app-neclace-selected',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,DinarPipe],
  templateUrl: './neclace-selected.component.html',
  styleUrl: './neclace-selected.component.css'
})
export class NeclaceSelectedComponent implements OnInit{

  identifiant:number=0;
  activatedRoute:ActivatedRoute=inject(ActivatedRoute);
  productId:Product[]=[];

  storedData: any=[];
  private readonly productservice:ProductSericeService=inject(ProductSericeService);
  ngOnInit(): void {
   
    this.identifiant=this.activatedRoute.snapshot.params['idn'];
    this.productservice.getProduts("").
    subscribe(
      data => this.productId=data);
    }
  
  ajouterAuPanier(p:Product) {
    this.productservice.addProduct(p).subscribe(data=>console.log(data))
    }
  
}
