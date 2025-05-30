import { Component, OnInit } from '@angular/core';
import { Product } from '../_model/product.model';
import { NgForm } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FileHandle } from '../_model/file_handle.model';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {
  isNewProduct =true;


  ngOnInit(): void {
    this.product = this.activatedRoute.snapshot.data['product'];
   
    if(this.product && this.product.productId){
      this.isNewProduct=false;
    }

    // Initialization logic if needed
  }



  product: Product = {
    productCategory: "",
    productName: "",
    productDescription: "",
    productDiscountedPrice: 0,
    productActualPrice: 0,
    productImages: []
  }

  constructor(
    private productService: ProductService,
    private sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute,
  ) { }

  addProduct(productForm: NgForm) {
    if (productForm.valid) {
      const productFormData = this.prepareFormData(this.product);
      this.productService.addProduct(productFormData).subscribe(
        (response: Product) => {
          productForm.reset();
          this.product.productImages = [];
        },
        (error: HttpErrorResponse) => {
          console.error('Erreur lors de l\'ajout du produit:', error);
        }
      );
    }
  }

  prepareFormData(product: Product): FormData {
    const formData = new FormData();
    formData.append(
      'product',
      new Blob([JSON.stringify(product)], { type: 'application/json' })
    );

    for (let i = 0; i < product.productImages.length; i++) {
      formData.append(
        'imagefile',
        product.productImages[i].file,
        product.productImages[i].file.name
      );
    }
    return formData;
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const file = input.files[0];
      if (file) {
        const fileHandle: FileHandle = {
          file: file,
          url: this.sanitizer.bypassSecurityTrustUrl(
            window.URL.createObjectURL(file)
          )
        };
        this.product.productImages.push(fileHandle);
      }
    }
  }

  removeImage(index: number): void {
    this.product.productImages.splice(index, 1);
  }

  filesDropped(files: FileHandle[]): void {
    this.product.productImages.push(...files);
  }
}
