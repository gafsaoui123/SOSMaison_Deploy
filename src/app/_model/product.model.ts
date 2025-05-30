import { FileHandle } from "./file_handle.model";

export interface Product {



 productId?: number;
 productCategory: string;
 productName: string;
 productDescription:string ;
 productDiscountedPrice:number ;
 productActualPrice:number ;
 productImages: FileHandle[]

}