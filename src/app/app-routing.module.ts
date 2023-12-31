import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TeamComponent } from './team/team.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LayoutComponent } from './layout/layout.component';
import { AppComponent } from './app.component';
import { SetpasswordComponent } from './setpassword/setpassword.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
const routes: Routes = [
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'team',
    component: TeamComponent,
  }, {
    path: 'dashboard',
    component: DashboardComponent,
  }, {
    path: 'employeeDetails',
    component: EmployeeDetailsComponent,
  }, {
    path: 'layout',
    component: LayoutComponent,
  },{
    path: 'setpassword',
    component: SetpasswordComponent,
  },
 
  {
    path: 'resetpassword',
    component: PasswordResetComponent,
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
