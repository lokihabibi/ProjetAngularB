import { Component, inject } from '@angular/core';
import { HeaderAdminComponent } from "../header-admin/header-admin.component";
import { RouterOutlet } from '@angular/router';
import { Product } from '../../Class/prouduct';
import { ProductSericeService } from '../../Service/product-serice.service';
import { AdminServiceService } from '../../Service/admin-service.service';

@Component({
  selector: 'app-page-admin',
  standalone: true,
  imports: [HeaderAdminComponent,RouterOutlet],
  templateUrl: './page-admin.component.html',
  styleUrl: './page-admin.component.css'
})
export class PageAdminComponent {
  products:Product[]=[]

  readonly productService:ProductSericeService=inject(ProductSericeService)
ngOnInit():void
{
  this.productService.getProduts('').subscribe(data=>this.products=data)

}
}
