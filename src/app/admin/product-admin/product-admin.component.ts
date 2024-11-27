import { Component, inject, OnInit } from '@angular/core';
import { HeaderAdminComponent } from "../header-admin/header-admin.component";
import { ProductSericeService } from '../../Service/product-serice.service';
import { Product } from '../../Class/prouduct';
import { DinarPipe } from '../../dinar.pipe';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-admin',
  standalone: true,
  imports: [DinarPipe, RouterOutlet,RouterLink],
  templateUrl: './product-admin.component.html',
  styleUrl: './product-admin.component.css'
})

export class ProductAdminComponent implements OnInit {
editProduct(_t7: Product) {
throw new Error('Method not implemented.');
}
deleteProduct(id:number) {
  // this.productService.deleteProduit(id).subscribe(data=>console.log("tfasakh"));

  this.productService.deleteProduit(id).subscribe(
    () => {
      console.log("Product deleted successfully");
      this.products = this.products.filter(p => p.id !== id);
    },
  );
}

  products:Product[]=[]
  readonly productService:ProductSericeService=inject(ProductSericeService)

ngOnInit():void
{
  this.productService.getProduts('').subscribe(data=>this.products=data)
}
}
