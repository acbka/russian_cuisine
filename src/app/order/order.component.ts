import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../order';
import { Categories } from '../categories';
import { Properties } from '../properties';
import { categoriesProperties } from '../categoriesProperties';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

   order : Order;
   properties : Map<Categories, Properties> = categoriesProperties;

  constructor(private orderService : OrderService) { }

  getOrder(): void {
   this.orderService.getOrder()
      .subscribe(order => this.order = order);
 }

  ngOnInit() {
   this.getOrder()
  }

}
