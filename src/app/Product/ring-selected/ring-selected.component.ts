import { Component, inject } from '@angular/core';
import { FooterComponent } from "../../Footer/footer/footer.component";
import { HeaderComponent } from "../../Header/header/header.component";
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../Class/prouduct';
import { ProductSericeService } from '../../Service/product-serice.service';
import { CurrencyPipe } from '@angular/common';
import { DinarPipe } from '../../dinar.pipe';

@Component({
  selector: 'app-ring-selected',
  standalone: true,
  imports: [FooterComponent, HeaderComponent,DinarPipe],
  templateUrl: './ring-selected.component.html',
  styleUrl: './ring-selected.component.css'
})
export class RingSelectedComponent {
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
