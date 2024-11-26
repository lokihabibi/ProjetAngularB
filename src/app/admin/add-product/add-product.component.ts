import { Component, inject } from '@angular/core';
import { ProductSericeService } from '../../Service/product-serice.service';
import { Product } from '../../Class/prouduct';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  products:Product[]=[]

  readonly productService:ProductSericeService=inject(ProductSericeService)

ngOnInit():void
{
  this.productService.getProduts('').subscribe(data=>this.products=data)
}
onSubmit() {
throw new Error('Method not implemented.');
}

}
