import { Injectable } from '@angular/core';
import { Product } from '../_model/product.model';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { ProductService } from './product.service';
import { ImageProcessingService } from './image-processing.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolverService implements Resolve<Product> {

  constructor(private productService: ProductService, private ImageProcessingService:ImageProcessingService) { }



  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<Product>  {

    // Check if the route has a parameter named 'productId'
    // If it does, fetch the product details by ID
    // If it doesn't, return an empty product object
   // or a default product object
   const id = route.paramMap.get("productId");

   if(id){
    return this.productService.getProductDetailsById(+id).pipe(
      map(product => this.ImageProcessingService.createImages(product)) // Wrap the product in an array
    ); //fetch details from backend
  }else{
    return of((this.getProductDetails()));   
  }
}




getProductDetails(){
  return {
    productCategory: "",
    productName: "",
    productDescription: "",
    productDiscountedPrice: 0,
    productActualPrice: 0,
    productImages: []
  };

}
}
