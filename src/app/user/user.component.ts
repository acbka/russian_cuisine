import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';
import { Validators } from '@angular/forms';
//import { HttpClient } from '@angular/common/http';
import { Order } from '../order';
//import { HttpHeaders } from '@angular/common/http';


@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

   order: Order;

   checkoutForm = new FormGroup({
      customerName: new FormControl('', [
         Validators.required,
         Validators.minLength(4)]),
      customerPhone: new FormControl('', [
         Validators.required,
         Validators.pattern('[0-9]{10,10}')
      ]),
      customerEmail: new FormControl('', [
         Validators.required,
         Validators.email]),
      customerAddress: new FormControl('', [Validators.required]),
      customerSuburb: new FormControl('', [Validators.required]),
      deliveryDateTime: new FormControl('', [Validators.required])
    });

    checked: string = "none";

   forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
      return (control: AbstractControl): { [key: string]: any } | null => {
         const forbidden = nameRe.test(control.value);
         return forbidden ? { 'forbiddenName': { value: control.value } } : null;
      }
   }

   dateFormat(date: Date): string {
      let y: number = date.getFullYear();

      let m: number = date.getMonth() + 1;
      let sm: string = m < 10 ? `0${m}` : `${m}`;

      let d: number = date.getDate();
      let sd: string = d < 10 ? `0${d}` : `${d}`;

      return `${y}-${sm}-${sd}`;
   }

   minDate(): string {
      var result = (new Date());

      if (result.getHours() <= 12) {
         result.setDate(result.getDate() + 1);
      } else {
         result.setDate(result.getDate() + 2);
      }

      return this.dateFormat(result);
   }

   maxDate(): string {
      var result = (new Date());
      result.setDate(result.getDate() + 7);
      return this.dateFormat(result);
   }

   radioClick(show: string): void {
      this.checked = show;
   }

   constructor(
      private orderServce: OrderService) {

      this.orderServce.getOrder().subscribe(ord => this.order = ord);
   }

   async onSubmit() {
      if (this.checkoutForm.status === "VALID" && this.order.isComplete()) {
         this.order.customerName = this.checkoutForm.controls["customerName"].value;
         this.order.customerAddress = this.checkoutForm.controls["customerAddress"].value;
         this.order.customerEmail = this.checkoutForm.controls["customerEmail"].value;
         this.order.customerPhone = this.checkoutForm.controls["customerPhone"].value;
         this.order.customerSuburb = this.checkoutForm.controls["customerSuburb"].value;
         this.order.deliveryDateTime = this.checkoutForm.controls["deliveryDateTime"].value;
         this.order.id = Math.round(Math.random() * 10000000);

         function orderStringRequest(ord: Order): string {
            let result: string = "";
            let soup = `so=${ord.soup[0].name}, ${ord.soup[1].name}`;
            let sides = `ga=${ord.garnish[0].name}, ${ord.garnish[1].name}`;
            let mains = `ma=${ord.main[0].name}, ${ord.main[1].name}`;
            let dessert = `de=${ord.dessert[0].name}`;
            let salads = `sa=${ord.salad[0].name}`;
            let name = `nm=${ord.customerName}`;
            let address = `ad=${ord.customerAddress}`;
            let id = `id=${ord.id}`;
            let phone = `ph=${ord.customerPhone}`;
            let date = `dt=${ord.deliveryDateTime}`;
            let email = `em=${ord.customerEmail}`;
            result = `${id}&${soup}&${sides}&${mains}&${dessert}&${salads}&${phone}&${date}&${name}&${address}&${email}`;
            return result;
         }


         //console.log(`http://www.sakhiepi.ru/src/mailer.aspx?${orderStringRequest(this.order)}`);
      fetch(`http://www.sakhiepi.ru/src/mailer.aspx?${orderStringRequest(this.order)}`);
               //.then((response) => {
               //    console.log(response);
               //});
      }
   }

   ngOnInit() {
      window.scrollTo(0, 0);
   }

}

// (new Intl.DateTimeFormat('en-US', options).format(result)).replace('/', '-').replace('/', '-').replace('/', '-');
/*
 *             console.log(JSON.stringify(this.order));

            //const response = await fetch('http://localhost/foodshop/default.aspx', {
            //    method: 'post', // *get, post, put, delete, etc.
            //    mode: 'no-cors', // cors, no-cors, *cors, same-origin
            //    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //    //credentials: 'same-origin', // include, *same-origin, omit
            //    headers: {
            //        'content-type': 'application/json'
            //        // 'content-type': 'application/x-www-form-urlencoded',
            //    },
            //    redirect: 'follow', // manual, *follow, error
            //    referrer: 'no-referrer', // no-referrer, *client
            //    body: JSON.stringify(this.order) // body data type must match "content-type" header
            //});*/
