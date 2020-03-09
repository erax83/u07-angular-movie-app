import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-db-contact',
  templateUrl: './db-contact.component.html',
  styleUrls: ['./db-contact.component.scss']
})
export class DbContactComponent implements OnInit {

  user: any;
  @Input('name') userName: string;
  isCollapsed: boolean = true;
  inputText: string = 'testing';

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
   
  }

  constructor() { 
    this.inputText = this.inputText;
  }

  ngOnInit(): void {
    this.user = {
      name: this.userName,
      phone: [
        '123 123',
        '456 456'
      ]
    };
  }

}
