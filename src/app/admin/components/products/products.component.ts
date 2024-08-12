import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../../../services/common/http-client.service';
import {Product} from "../../../contracts/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent extends BaseComponent implements OnInit {
  constructor(
    spinner: NgxSpinnerService,
    private httpClientService: HttpClientService,
  ) {
    super(spinner);
  }

  ngOnInit() {
    this.showSpinner(SpinnerType.BallAtom);
    this.httpClientService
      .get<Product[]>({
        controller: 'products',
      })
      .subscribe((data) => console.log(data[0]));
    // this.httpClientService
    //   .put(
    //     {
    //       controller: 'products',
    //     },
    //     {
    //       id: 'f7503a8c-06bb-429b-8309-081a8a226e61',
    //       name: 'renkli kagit',
    //       stock: 1500,
    //       price: 5.5,
    //     },
    //   )
    //   .subscribe();
    // this.httpClientService
    //   .post(
    //     { controller: 'products' },
    //     { name: 'Kalem', stock: 100, price: 150 },
    //   )
    //   .subscribe();
    // this.httpClientService.delete({controller:"products"}, "ba8c9e74-08f0-4bad-9f5c-0e93fe182eed").subscribe();
  }
}
