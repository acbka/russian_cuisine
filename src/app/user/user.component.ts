import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  checkoutForm = new FormGroup({
    customerName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      this.forbiddenNameValidator(/bobik/i)]),
    customerPhone: new FormControl(''),
    customerEmail: new FormControl(''),
    customerAddress: new FormControl(''),
    customerSuburb: new FormControl(''),
    deliveryDateTime: new FormControl('')
  });

  checked : string = "none";

  forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? { 'forbiddenName': { value: control.value } } : null;
    }
  }

  dateFormat(date: Date) : string {
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

  radioClick(show: string) : void {
     this.checked = show;
  }
constructor(
  private orderServce: OrderService,
  private formBuilder: FormBuilder) {

  //this.checkoutForm = this.formBuilder.group({
  //  customerName : "",
  //  customerPhone : "",
  //  customerAddress : "",
  //  deliveryDateTime : new Date()
  //});

}

onSubmit() {
  console.log(this.checkoutForm.status);
}

ngOnInit() {
}

}

// (new Intl.DateTimeFormat('en-US', options).format(result)).replace('/', '-').replace('/', '-').replace('/', '-');
