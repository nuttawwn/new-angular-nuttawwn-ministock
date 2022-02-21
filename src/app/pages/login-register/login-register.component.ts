import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router'
@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {
  /*กรณี ตัวแปรที่อยู่ใน class จะถูกเรียก ว่า property*/
  /*กรณี ตัวแปรที่อยู่ใน function ตั้งหากถึงจะถูกเรียก ว่า ตัวแปร*/
  //ตัวแปร = property
  message: string = 'Taoswagboy';
  /* เป็นลักษณะ แบบ one way binding */
  //ตัวแปร object
  profile_1 = [] // เป็นการเก็บค่าได้มากกว่า 1 set
  profile_2 = { // เป็นการเก็บค่าแค่ 1 set
    //การเรียกชื่อตัวที่กำหนดค่่าขึ้น
    /*key : value*/
    "name": "Nuttawut",
    "tel": "094-8219179",
    "gender": "Male",
    "age": "25"
  }
  //การสร้าง Two Way Binding
  emailData: string = ""
  passData: string = ""
  /* เป็นลักษณะ แบบ one way binding */
  /*{{userData | json}}
  จะเป็นการ format ค่าคืนกลับมาใน รูปแบบ ของ Json */
  userData = {
    "email": "",
    "pass": ""
  }
  //ตัวที่ Import มาต้องนำไป ประกาศใน constructor
  // ถ้าใช้ Public จะทำให้สามารถเรียกหน้าอื่นได้ แต่ถ้าเป็นการใชแบบ private จะสามารถเรียกได้แค่เฉพาะ component 
  constructor(private router : Router) { }
  ngOnInit(): void {
  }
  submitLogin() {
    // alert("Hey Angular");
    //alert("user : "+this.userData.email+"\n"+"pass : "+this.userData.pass)
    if (this.userData.email == "admin@gmail.com" && this.userData.pass == "1234") {
      alert("Login Success")
      //function navigate จะใช้ในการพาไปยังที่เราต้องการ
      //angular จะไม่ได้เป็นการต่อฐานข้อมูลโดยตรงแต่จะเป็นการต่อผ่าน API
      //json fromat file จะเป็นรูปแบบ standarn สำหรับ api กับ หน้าบ้าน 
      // https://www.itgenius.co.th/sandbox_api/ministockapi/public/api/products = endpriontURL
      this.router.navigate(['backend']);
    }
    else {
      alert("user and password incorrect !!")
    }
  }
}
