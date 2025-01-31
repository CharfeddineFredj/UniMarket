import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgxSpinnerService } from 'ngx-spinner';
import { UserdataService } from '../services/userdata.service';
import { Register } from './register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register = new Register();
  target:any='';

  constructor(
    private spinner : NgxSpinnerService,
    private userdata : UserdataService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }



 // registerUser()
  //{
   // console.log(this.register);
 // }
  registerUser()
{
  if (this.register.name == undefined || this.register.email == undefined || this.register.contact == undefined || this.register.password == undefined) {
    this.target = '<div class="alert alert-danger" > Error! Please enter the details</div>';
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
      this.target = '';
    }, 5000);
    return;
  }
  this.userdata.registerUser(this.register).subscribe((response: any) => {
    // this.spinner.hide();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
      this.target = '';
    }, 5000);

    this.register.name = '';
    this.register.email = '';
    this.register.contact = '';
    this.register.password = '';

    console.log(response);

    if (response.code == 1) {
      this.target = '<div class="alert alert-success" > Success! ' + response.message + '</div>';
      this.route.navigate(['/']);
    }
    else if (response.code == 2) {
      this.target = '<div class="alert alert-danger" > Error! ' + response.message + '</div>';
    }
  });
}

}
