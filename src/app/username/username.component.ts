import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  username = "Rom";
  isUsernameEmpty = false;

  constructor() { }

  ngOnInit() {
  }

  clearUsername() : void {
    this.username = "";
    this.isUsernameEmpty = true;
  }

  onUsernameUpdate(event : Event): void {
    this.username = (<HTMLInputElement>event.target).value;
    this.isUsernameEmpty = this.username === "";
  }

}
