import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success" [hidden]="displayNotification">
                <p class="text-center m-0">This website use cookies for better user experience</p>
                <div class="close">
                  <button
                    class="close"
                    (click)="closeNotification()"
                  >x</button></div>
             </div>`,
  styles : [".notification-div{background-color: #FAD7A0; text-align: center}", "p{font-size: 14px}", ".close{float: right; margin-top: -15px; border: none; background-color: transparent}"]
})
export class NotificationComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  displayNotification: boolean = false;

  closeNotification() {
    this.displayNotification = true;
  }
}
