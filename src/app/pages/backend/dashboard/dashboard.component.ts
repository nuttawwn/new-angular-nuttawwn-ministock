import { Component, OnInit } from '@angular/core';
import { ProductAPIService } from '../../../services/product-api.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public api : ProductAPIService) { }
  

  //สร้างตัวแปรมารับค่าจาก API
  /*
    หากเราไม่ทราบประเภทของตัวแปรให้เราสามารถประกาศเป็น any ได้ แต่จะติดปัญหาเรื่องการกินพื้น
    ที่หากทราบประเภทตัวแปรให้ประกาศเป็น typeนั้นไปเลย
  */
  dataProduct : any =[]

  ngOnInit(): void {

    /*
      subscribe คือการติดตามข้อมูลใน api นี้ว่ามีการออกมารึยัง
      data : {} = การประกาศตัวแปรในรูปแบบของ object
      =>(เครื่องหมาย arrow function) ต้องไปศึกษา javascript ES6(New version ) return ค่่าออกมา โดยไม่ต้องพิมพ์ return 
      (ในเงื่อนไขนี้ คือการเอาตัวแปรประเภท object return ค่่าออกมา โดยไม่ต้องพิมพ์ return)

    */
    this.api.getProducts().subscribe((data:{})=>{
      console.log("data >>>>>",data) 
      this.dataProduct = data // ตัว data ที่ได้นั้นเป็นการกำหนดค่าจาก method subxcribe
      console.log("this.dataProduct >>>>",this.dataProduct);
      
    })
  }
  /*
    angular directive 
      -*ngFor
       [let item of dataProduct]
       -item = สามารถตั้งเป็นอะไรก็ได้
       -dataProduct = ตัวแปรที่รับค่า จาก API
       {{item.product_detail | slice:0:50}} = ทำหน้าที่ตัดคำให้สั่้นลง จาก 0 ถึง 50 ตัวอักษร
      | = pipe จะทำหน้าที่ในการ format ข้อคว่ามที่แสดงออกมา
      [API Reference => slicePipe]
      
  */
}
