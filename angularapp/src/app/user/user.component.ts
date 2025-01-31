import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';
import { User } from './user.model';
import { HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';




@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  userdata1: any;
  studentData: any;
  userobj = new User();
  target: string = '';
  token = '';


constructor (
       private userdata : UserdataService,
       private spinner : NgxSpinnerService,
       private toastr: ToastrService,
       private route: Router
  ) {}

ngOnInit(): void {
  this.showApiData();
}
showApiData()
{
  this.userdata.getDataFormApi(this.userdata).subscribe(res=>{
     console.log(res);
    this.studentData=res;
});
}
searchUser()
  {
    this.showApiData();
  }

addStudent()
{
  if (this.userobj.name == undefined || this.userobj.email == undefined || this.userobj.contact == undefined) {
    this.target = '<div class="alert alert-danger" > Error! Please enter the details</div>';
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
      this.target = '';
    }, 5000);
    return;
  }
  this.userdata.addStudent(this.userobj).subscribe((response: any) => {
    // this.spinner.hide();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
      this.target = '';
    }, 5000);
    this.showApiData();  // refresh the table data
    this.userobj.name = '';
    this.userobj.email = '';
    this.userobj.contact = '';

    console.log(response);

    if (response.code == 1) {
      this.target = '<div class="alert alert-success" > Success! ' + response.message + '</div>';
    }
    else if (response.code == 2) {
      this.target = '<div class="alert alert-danger" > Error! ' + response.message + '</div>';
    }
  });
}

deleteData(id: number) {
  this.toastr.warning('Are you sure you want to delete this record?', 'Confirmation', {
    timeOut: 0,
    extendedTimeOut: 0,
    closeButton: true,
    positionClass: 'toast-top-center',
    tapToDismiss: false,
    disableTimeOut: true
  }).onTap.subscribe(() => {
    // Code à exécuter lorsque l'utilisateur clique sur l'alerte
    this.spinner.show();
    this.userdata.deleteData(id).subscribe((response: any) => {
      // Code à exécuter après la suppression des données
      this.showApiData();
      this.spinner.hide();
      if (response.code == 1) {
        this.toastr.success(response.message, 'Success');
      }
      else if (response.code == 2) {
        this.toastr.error(response.message, 'Error');
      }
    });
  });
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

      }, 300);

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


