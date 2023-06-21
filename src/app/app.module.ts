import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TeamComponent } from './team/team.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LayoutComponent } from './layout/layout.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TabMenuModule } from 'primeng/tabmenu';
import { SetpasswordComponent } from './setpassword/setpassword.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
<<<<<<< HEAD
import { PaginatorModule } from 'primeng/paginator';
=======
import { TabViewModule } from 'primeng/tabview';
>>>>>>> 3327abae3a60d5ca635fac7e452d09981f8a9d33
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    TeamComponent,
    DashboardComponent,
    EmployeeDetailsComponent,
  
    LayoutComponent,
    SetpasswordComponent,
    PasswordResetComponent
  ],
  imports: [
    BrowserModule,CardModule,
    AppRoutingModule,
    ButtonModule,
    TabViewModule,
    TableModule,
    InputSwitchModule,
    FileUploadModule,
    FormsModule,InputTextModule,
    TabMenuModule,
    PaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
