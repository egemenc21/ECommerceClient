import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'client';

  constructor() {}
}

// $.get('https://localhost:7027/api/Product').then((response: Response) => {
//   console.log(response)})
