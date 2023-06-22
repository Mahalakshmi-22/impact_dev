import { Component } from '@angular/core';
import { Form, FormGroup,FormControl } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {


  formgroup:FormGroup=new FormGroup({
    
   email:new FormControl(''),
   password:new FormControl(''),
  })
}
