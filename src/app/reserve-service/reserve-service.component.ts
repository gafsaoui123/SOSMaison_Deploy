import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderDetails } from '../_model/order-details.model';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../_model/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-reserve-service',
  templateUrl: './reserve-service.component.html',
  styleUrls: ['./reserve-service.component.css']
})
export class ReserveServiceComponent {

  productDetails: Product[] = [];
  orderDetails: OrderDetails = {
    fullName: '',
    fullAddress: '',
    contactNumber: '',
    alternateContactNumber: '',
    orderProductQuantityList: []
  };
  constructor(private acitivatedRoute: ActivatedRoute,private productService: ProductService ) { }

  ngOnInit(): void {
   this.productDetails = this.acitivatedRoute.snapshot.data['productDetails']; 
   
   this.productDetails.forEach(
    x => this.orderDetails.orderProductQuantityList.push(
      {
        productId: x.productId ?? 0,
        quantity: 1
      })
   );

   console.log('Product Details:', this.productDetails);
   console.log('Order Details:', this.orderDetails);
  }


  public placeOrder(orderForm: NgForm) {
    this.productService.placeOrder(this.orderDetails).subscribe(
      (response) => {
        console.log('Order placed successfully:', response);
        orderForm.reset();
      },
      (error) => {
        console.error('Error placing order:', error);
      }
    );
  }
}
