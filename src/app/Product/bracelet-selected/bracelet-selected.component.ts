import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductSericeService } from '../../Service/product-serice.service';
import { Product } from '../../Class/prouduct';
import { HeaderComponent } from "../../Header/header/header.component";
import { CurrencyPipe } from '@angular/common';
import { FooterComponent } from "../../Footer/footer/footer.component";
import { DinarPipe } from '../../dinar.pipe';

@Component({
  selector: 'app-bracelet-selected',
  standalone: true,
  imports: [HeaderComponent, DinarPipe, FooterComponent],
  templateUrl: './bracelet-selected.component.html',
  styleUrl: './bracelet-selected.component.css'
})
export class BraceletSelectedComponent {
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
