import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../Header/header/header.component';
import { FooterComponent } from '../../Footer/footer/footer.component';
import { RouterLink } from '@angular/router';
import { ProductSericeService } from '../../Service/product-serice.service';
import { Product } from '../../Class/prouduct';
import { DinarPipe } from '../../dinar.pipe';

@Component({
  selector: 'app-ring',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,RouterLink,DinarPipe],
  templateUrl: './ring.component.html',
  styleUrl: './ring.component.css'
})
export class RingComponent {
  products:Product[]=[];
  searchName:string='';
  filteredProducts:Product[]=[];

  private readonly productservice:ProductSericeService=inject(ProductSericeService);
  ngOnInit(): void {
    this.productservice.getProduts("Earrings").subscribe(data => {this.products=data
      this.filteredProducts = data;
    
    }
    );
    
  }
  ajouterAuPanier(p:Product) {
    this.productservice.addProduct(p).subscribe(data=>console.log(data))
    }
}
