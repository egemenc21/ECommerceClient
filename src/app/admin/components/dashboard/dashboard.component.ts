import { Component, OnInit } from '@angular/core';
import {
  AlertifyService,
  MessageType,
  Position,
} from '../../../services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  constructor(public alertify: AlertifyService) {}

  ngOnInit() {}

  m() {
    this.alertify.message('mlala', {
      messageType: MessageType.Warning,
      dismissOthers: true,
      delay: 2,
      position: Position.BottomRight,
    });
  }
  d() {
    this.alertify.dismiss();
  }
}
