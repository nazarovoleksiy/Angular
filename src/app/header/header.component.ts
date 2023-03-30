import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  slogan: string = 'Your one stop shop everything';

  source: string = "https://plus.unsplash.com/premium_photo-1664201890375-f8fa405cdb7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

  getSlogan() {
    return 'This is a new slogan for our web application'
  }
}
