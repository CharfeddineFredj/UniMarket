import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from '../services/userdata.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


    target: string = '';
    token = '';

    constructor (
      private userdata : UserdataService,
      private spinner : NgxSpinnerService,
      private toastr: ToastrService,
      private route: Router
 ) {}
 ngOnInit(): void {

}



  logoutUser() {
    var c = confirm("Are you sure you want to logout?");
    if (c) {
      this.spinner.show();
      this.userdata.logoutUser(localStorage.getItem('token')).subscribe((response: any) => {

        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
          this.target = '';

        }, 5000);

        if (response.code == 1) {
          localStorage.removeItem('token');
          this.route.navigate(['/']);
        }
        else if (response.code == 2) {
          this.target = '<div class="alert alert-danger" > Error! ' + response.message + '</div>';
        }

      });
    }

  }
}

