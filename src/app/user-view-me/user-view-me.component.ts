import { Component, OnInit } from '@angular/core';
import { Product } from '../_model/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Professionals } from '../_model/professionals.model';
import { FooterComponent } from "../footer/footer.component";


@Component({
  selector: 'app-user-view-me',
  templateUrl: './user-view-me.component.html',
  styleUrls: ['./user-view-me.component.css']
})
export class UserViewMeComponent implements OnInit {


  selectedProductIndex = 0;
  
  professionals: Professionals[] = [];
 
  product: Product = {
    productCategory: "",
    productName: "",
    productDescription: "",
    productDiscountedPrice: 0,
    productActualPrice: 0,
    productImages: []
  }
  productService: any;
  
  ngOnInit(): void {
    this.product = this.activatedRoute.snapshot.data['product'];
    console.log(this.product);
   this.getallprofessionals();
  }

  constructor(private activatedRoute: ActivatedRoute, private prof:ProductService, private router: Router) { }

  getallprofessionals(): void {
    this.prof.getallprofessionals().subscribe({
      next: (data: Professionals[]) => {
        this.professionals = data;
        console.log(this.professionals);
      },
      error: (error: any) => {
        console.error('Error fetching professionals:', error);
      }
    });
  }
  // Other methods and properties can be added here as needed

  changeIndex(index: number) {
    this.selectedProductIndex = index;
  }

  recommender(productId: number) {
    this.router.navigate(['/reserveService',{
      isSingleProductCheckout: true,
      id: productId
    }]);
  }

}
