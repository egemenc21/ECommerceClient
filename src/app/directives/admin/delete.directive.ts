import {Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2} from '@angular/core';
import {ProductService} from "../../services/common/models/product.service";
import {NgxSpinnerService} from "ngx-spinner";
import {SpinnerType} from "../../base/base.component";

declare var $: any;

@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(private element: ElementRef,
              private _renderer: Renderer2,
              private productService: ProductService,
              private spinner: NgxSpinnerService) {
    const icon = _renderer.createElement('mat-icon');
    const text = _renderer.createText('delete');


    this._renderer.appendChild(icon, text);
    this._renderer.addClass(icon, 'material-icons');
    this._renderer.setStyle(icon, "cursor", "pointer");
    this._renderer.appendChild(this.element.nativeElement, icon);
  }

  @Input() id: string = '';
  @Output() callback = new EventEmitter<any>();

  @HostListener('click')
  onClick() {
    this.spinner.show(SpinnerType.BallAtom);
    const td: HTMLTableCellElement = this.element.nativeElement;
    this.productService.delete(this.id)
    $(td.parentElement).fadeOut(2000, () => {
      this.callback.emit()
    });
  }


}
