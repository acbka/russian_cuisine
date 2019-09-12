import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

   order : Order;

  constructor(private orderService : OrderService) { }

  getOrder(): void {
   this.orderService.getOrder()
      .subscribe(order => this.order = order);
 }

  ngOnInit() {
   this.getOrder()
  }

}
