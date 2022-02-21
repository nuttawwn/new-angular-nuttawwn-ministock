import { ProductModel } from './../Models/product.model';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ProductAPIService {

//API URL
apiURL = "https://www.itgenius.co.th/sandbox_api/ministockapi/public/api/";


constructor(private http : HttpClient){}


//Header
httpOption ={
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


//อ่านข้อมูล Product
//Observable จะเก็บ Product เอาไว้
getProducts(): Observable<ProductModel>{
  return this.http.get<ProductModel>(this.apiURL+'products')
}
}
