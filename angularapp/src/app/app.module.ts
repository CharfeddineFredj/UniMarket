import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';


import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule} from 'ngx-toastr';
import { AuthGuard } from './auth.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { EditComponent } from './edit/edit.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterFComponent } from './register-f/register-f.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';













@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EditComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    RegisterFComponent,
    DashboardComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    NgbModule,
    ToastrModule.forRoot(),



  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule { }
