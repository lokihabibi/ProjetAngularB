import { Component, inject } from '@angular/core';
import { Product } from '../../Class/prouduct';
import { ProductSericeService } from '../../Service/product-serice.service';
import { HeaderComponent } from "../../Header/header/header.component";
import { FooterComponent } from "../../Footer/footer/footer.component";
import { RouterLink } from '@angular/router';
import { DinarPipe } from '../../dinar.pipe';

@Component({
  selector: 'app-bracelet',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,RouterLink,DinarPipe],
  templateUrl: './bracelet.component.html',
  styleUrl: './bracelet.component.css'
})
export class BraceletComponent {

  products:Product[]=[];
  searchName:string='';
  filteredProducts:Product[]=[];

  private readonly productservice:ProductSericeService=inject(ProductSericeService);
  ngOnInit(): void {
    this.productservice.getProduts("Bracelets").subscribe(data => {this.products=data
      this.filteredProducts = data;
    
    }
    );
    
  }
  ajouterAuPanier(p:Product) {
    this.productservice.addProduct(p).subscribe(data=>console.log(data))
    }
}
