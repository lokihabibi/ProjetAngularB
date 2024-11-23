import { Component, OnInit ,inject} from '@angular/core';
import { FooterComponent } from '../Footer/footer/footer.component';
import { HeaderComponent } from '../Header/header/header.component';
import { ProductSericeService } from '../Service/product-serice.service';
import { Client } from '../Class/client';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent implements OnInit {
  panier:Client[]=[];
  private readonly productservice:ProductSericeService=inject(ProductSericeService);
  ngOnInit(): void {
    this.productservice.getClient().subscribe(data => {this.panier=data,console.log(data)});
    
  }
}
