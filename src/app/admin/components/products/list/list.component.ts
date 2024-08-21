import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { List_Product } from '../../../../contracts/list_product';
import { ProductService } from '../../../../services/common/models/product.service';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  AlertifyService,
  MessageType,
  Position,
} from '../../../../services/admin/alertify.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent
  extends BaseComponent
  implements OnInit
{
  displayedColumns: string[] = [
    'name',
    'stock',
    'price',
    'createdDate',
    'updatedDate',
  ];
  dataSource: MatTableDataSource<List_Product> = null;

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(
    private productService: ProductService,
    spinner: NgxSpinnerService,
    private alertifyService: AlertifyService,
  ) {
    super(spinner);
  }

  async getProducts(){
    this.showSpinner(SpinnerType.BallAtom);

    const data: {totalCount:number, products: List_Product[]} = await this.productService.read(
      this.paginator ? this.paginator.pageIndex : 0,
      this.paginator? this.paginator.pageSize : 5,
      () => this.hideSpinner(SpinnerType.BallAtom),
      (errorMessage) =>
        this.alertifyService.message(errorMessage, {
          dismissOthers: true,
          messageType: MessageType.Error,
          position: Position.TopRight,
        }),
    );

    this.dataSource = new MatTableDataSource<List_Product>(data.products);
    this.paginator.length = data.totalCount;
  }

  async ngOnInit() {
   await this.getProducts()
  }

  async pageChanged() {
    await this.getProducts()
  }
}
