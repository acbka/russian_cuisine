import { Component, OnInit, AfterViewChecked } from '@angular/core';

declare let paypal: any;
@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.scss']
})
export class PaypalComponent implements OnInit, AfterViewChecked {

   addScript: boolean = false;
   paypalLoad: boolean = true;
   
   finalAmount: number = 1;
 
   paypalConfig = {
     env: 'sandbox',
     client: {
       sandbox: 'AawAYRBUUrorBuXIW5llkmxB-IGhbNxtLGEoZPTNd1vqAkl9QCYvNOei9kLh40AhJIw5t6X6xJLBx1Ac',
       production: '<your-production-key here>'
     },
     style: {
      layout:  'vertical',
      color:   'white',
      shape:   'rect',
      label:   'paypal',
      width:    '50px'
   },
     commit: true,
     payment: (data, actions) => {
       return actions.payment.create({
         payment: {
           transactions: [
             { amount: { total: this.finalAmount, currency: 'NZD' } }
           ]
         }
       });
     },
     onAuthorize: (data, actions) => {
       return actions.payment.execute().then((payment) => {
         //Do something when payment is successful.
       })
     }
   };
 
   ngAfterViewChecked(): void {
     if (!this.addScript) {
       this.addPaypalScript().then(() => {
         paypal.Button.render(this.paypalConfig, '#paypal-button-container');
         this.paypalLoad = false;
       })
     }
   }
   
   addPaypalScript() {
     this.addScript = true;
     return new Promise((resolve, reject) => {
       let scripttagElement = document.createElement('script');    
       scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
       scripttagElement.onload = resolve;
       document.body.appendChild(scripttagElement);
     })
   }
 

  constructor() { }

  ngOnInit() {
  }

}
