import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

   checkoutForm = new FormGroup({

   customerName : new FormControl('', Validators.required),
   customerEmail : new FormControl('', Validators.required),
   customerAddress : new FormControl(''),
   customerSuburb : new FormControl(''),
   customerPhone : new FormControl(''),
   deliveryDateTime : new FormControl(''),
   })

   minDate(): string {
      var result = (new Date());
      return result.toLocaleDateString();
   }

  constructor(private formBuilder: FormBuilder, orderService: OrderService) {
/*
   this.checkoutForm = this.formBuilder.group({
      customerName: '',
      customerEmail: '',
      customerAddress: ''
    });
*/
   }

   onSubmit(){
      console.warn(this.checkoutForm.status);
   }

  ngOnInit() {
  }

}
