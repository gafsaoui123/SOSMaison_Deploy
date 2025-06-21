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
  PATH_OF_API ="https://backgafsaoui.onrender.com";
  PATH_OF_API_LOCAL = "http://localhost:9090";
  constructor(private httpClient:HttpClient) {}

  public addProduct(product: FormData){
    return this.httpClient.post<Product>(`${this.PATH_OF_API_LOCAL}/addNewProduct`, product);

    }

  public getAllProducts(pageNumber: number){
    return this.httpClient.get<Product[]>(`${this.PATH_OF_API_LOCAL}/getAllProducts?pageNumber=`+ pageNumber);
   }

   public get3Products(pageNumber: number){
    return this.httpClient.get<Product[]>(`${this.PATH_OF_API_LOCAL}/get3Products?pageNumber=`+ pageNumber);
   }

  public deleteProduct(productId: number) {
    return this.httpClient.delete(`${this.PATH_OF_API_LOCAL}/deleteProductDetails/${productId}`);
  }

  public getProductDetailsById(productId: number) {
    return this.httpClient.get<Product>(`${this.PATH_OF_API_LOCAL}/getProductDetailsById/${productId}`);
  }

  // Récupère tous les professionnels depuis l'API locale
 // public getallprofessionals(): Observable<Professionals[]> {
    //return this.httpClient.get<Professionals[]>(`${this.PATH_OF_API_LOCAL}/professionals`);
 // }

  public getProductDetails(isSingleProductCheckout: boolean, productId: number){
    return this.httpClient.get<Product[]>(`${this.PATH_OF_API_LOCAL}/getProductDetails/${isSingleProductCheckout}/${productId}`);
  }

  public placeOrder(orderDetails: OrderDetails) {
    return this.httpClient.post(`${this.PATH_OF_API_LOCAL}/placeOrder`, orderDetails);
  }
}
