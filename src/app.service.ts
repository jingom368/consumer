import { Injectable } from '@nestjs/common';
import { OrderDTO } from './orders.dto';

@Injectable()
export class AppService {
  orders: OrderDTO[] = [];

  handleOrderPlaced(order: OrderDTO) {
    console.log(`recieved a new order - customer: ${order.email}`);
    this.orders.push(order);
    // Send email
  }

  getOrders() {
    return this.orders;
  }
}
