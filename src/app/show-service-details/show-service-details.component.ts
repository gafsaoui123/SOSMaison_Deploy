import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../_model/product.model';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ShowImagesDialogComponent } from './show-images-dialog/show-images-dialog.component';
import { ImageProcessingService } from '../services/image-processing.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';
// adjusted the path

@Component({
  selector: 'app-show-service-details',
  templateUrl: './show-service-details.component.html',
  styleUrls: ['./show-service-details.component.css']
})
export class ShowServiceDetailsComponent implements OnInit {

  products: Product[] = [];


  constructor(private router:Router,private productService: ProductService,private dialog: MatDialog,public imagesDialog: MatDialog,private imageProcessingService: ImageProcessingService) { }

  ngOnInit(): void {
    this.getallProducts();
  }

  public getallProducts() {
    this.productService.getAllProducts()
    .pipe(
      map((x: Product[], i)=>x.map((product: Product) => this.imageProcessingService.createImages(product)))
    )
    .subscribe(
      (resp: Product[]) => {
        this.products = resp;
        console.log('Products loaded:', this.products);
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching products:', error);
      }
    );
  }

 

public deleteProduct(productId: number): void {
  const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    width: '350px',
    data: { message: 'Êtes-vous sûr de vouloir supprimer ce produit ?' }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.productService.deleteProduct(productId).subscribe(
        () => {
          console.log('Produit supprimé avec succès');
          this.getallProducts();
        },
        (error: HttpErrorResponse) => {
          console.error('Erreur lors de la suppression du produit:', error);
        }
      );
    }
  });
}

showImages(product: Product): void {
  const imageCount = product.productImages?.length || 0;

  let width = '80vw'; // default
  if (imageCount === 1) width = '400px';
  else if (imageCount === 2) width = '600px';

  this.imagesDialog.open(ShowImagesDialogComponent, {
    data: {
      images: product.productImages
    },
    width: width,
    maxHeight: '90vh',
    autoFocus: false,
    panelClass: 'custom-dialog-panel'
  });
}


editProductDetails(productId: number): void {
  this.router.navigate(['/addnewproduct', { productId: productId }]);
}



}
