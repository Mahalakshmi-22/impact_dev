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
import { TabMenuModule } from 'primeng/tabmenu';
import { SetpasswordComponent } from './setpassword/setpassword.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';

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
    TabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
