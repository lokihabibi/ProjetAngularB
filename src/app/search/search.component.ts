import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../Header/header/header.component";
import { FooterComponent } from "../Footer/footer/footer.component";
import { Product } from '../Class/prouduct';
import { ProductSericeService } from '../Service/product-serice.service';
import { ActivatedRoute,Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  products: Product[] = [];
  searchName: string = '';
  filteredProducts: Product[] = [];
  storedData: any = [];
  
  private readonly router:Router= inject(Router);

  private readonly productservice: ProductSericeService = inject(ProductSericeService);
  ngOnInit(): void {
    this.productservice.getProduts("").subscribe(data => {
      this.products = data
      this.filteredProducts = data;
    }
    );
    const data = localStorage.getItem('data');
    console.log("data2", data)
    if (data) {
      this.storedData = JSON.parse(data);

    }
    console.log("hedhy data baad localstorage" + this.storedData);
  }
  ajouterAuPanier(p: Product) {
    this.productservice.addProduct(p).subscribe(data => console.log(data))
  }

  // onSearch(name: string) {
  //   this.searchName = name;
  //   this.productservice.searchProductByName(name).subscribe((ids) => {
  //     this.filteredProducts = [];

  //     ids.forEach(id => {
  //       this.productservice.getProductById(id).subscribe((product) => {
  //         this.filteredProducts.push(product);
  //       });
  //     });

  //     console.log('*******');
  //     console.log("hedha filtred"+this.filteredProducts);
  //   });
  // }



}


























