import { Injectable } from '@angular/core';
import { Product } from '../_model/product.model';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ProductService } from './product.service';
import { ImageProcessingService } from './image-processing.service';

@Injectable({
  providedIn: 'root'
})
export class ReserveServiceService implements Resolve <Product[]> {

  constructor(private productService: ProductService, private imageProcessingService: ImageProcessingService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product[] | Observable<Product[]> | Promise<Product[]> {

    const id = route.paramMap.get('id');
    const isSingleProductCheckout = route.paramMap.get('isSingleProductCheckout') === 'true';
    return this.productService.getProductDetails(isSingleProductCheckout, Number(id))
    .pipe(
      map(
        (x: Product[], i) => x.map((product : Product) => this.imageProcessingService.createImages(product))
      )
    )
  }
}
