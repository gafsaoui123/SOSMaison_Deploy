import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../_model/product.model';
import { Professionals } from '../_model/professionals.model';
import { Observable } from 'rxjs';
import { OrderDetails } from '../_model/order-details.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) {}

  public addProduct(product: FormData){
    return this.httpClient.post<Product>("https://backend-sos-maison.onrender.com/addNewProduct", product);

    }

  public getAllProducts(){
    return this.httpClient.get<Product[]>("https://backend-sos-maison.onrender.com/getAllProducts");
   }

  public deleteProduct(productId: number) {
    return this.httpClient.delete("https://backend-sos-maison.onrender.com/deleteProductDetails/" + productId);
  }

  public getProductDetailsById(productId: number) {
    return this.httpClient.get<Product>("https://backend-sos-maison.onrender.com/getProductDetailsById/" + productId);
  }

  public getallprofessionals(): Observable<Professionals[]> {
    return this.httpClient.get<Professionals[]>("https://backend-backup-4.onrender.com/professionals");
  }

  public getProductDetails(isSingleProductCheckout: boolean, productId: number){
    return this.httpClient.get<Product[]>("https://backend-sos-maison.onrender.com/getProductDetails/" + isSingleProductCheckout + "/" + productId);
  }
    
  public placeOrder(orderDetails: OrderDetails) {
    return this.httpClient.post("https://backend-sos-maison.onrender.com/placeOrder", orderDetails);
  }
}
