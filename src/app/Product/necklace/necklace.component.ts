import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../Header/header/header.component';
import { FooterComponent } from '../../Footer/footer/footer.component';
import { Product } from '../../Class/prouduct';
import { ProductSericeService } from '../../Service/product-serice.service';
import { RouterLink } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DinarPipe } from '../../dinar.pipe';

@Component({
  selector: 'app-necklace',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,RouterLink,DinarPipe],
  templateUrl: './necklace.component.html',
  styleUrl: './necklace.component.css'
})
export class NecklaceComponent implements OnInit {

  products:Product[]=[];
  searchName:string='';
  filteredProducts:Product[]=[];

  private readonly productservice:ProductSericeService=inject(ProductSericeService);
  ngOnInit(): void {
    this.productservice.getProduts("Necklaces").subscribe(data => {this.products=data
      this.filteredProducts = data;
    
    }
    );
    
  }
  ajouterAuPanier(p:Product) {
    this.productservice.addProduct(p).subscribe(data=>console.log(data))
    }
  // onSearch(name: string) {
  //   this.searchName = name;
  
  //   this.productservice.searchProductByName(name).subscribe((idn) => {
  //     this.filteredProducts = [];
  
  //     idn.forEach(id => {
  //       this.productservice.getProductById(id).subscribe((product) => {
  //         this.filteredProducts.push(product);
  //       });
  //     });
  
  //     console.log('*******');
  //     console.log(this.filteredProducts);
  //   });
  // }
    
}
