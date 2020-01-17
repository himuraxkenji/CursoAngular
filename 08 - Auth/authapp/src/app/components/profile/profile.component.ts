import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

  profile: any;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.profile = this.auth.userProfile$.source;
    console.log(this.profile);
  }

}