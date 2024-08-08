import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrdersModule} from "./orders/orders.module";
import {CustomersModule} from "./customers/customers.module";
import {ProductsModule} from "./products/products.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OrdersModule,
    CustomersModule,
    ProductsModule
  ]
})
export class ComponentsModule {}
