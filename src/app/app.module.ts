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
import { SidebarModule } from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { TreeSelectModule } from 'primeng/treeselect';
import { ReactiveFormsModule } from '@angular/forms';


import { InputSwitchModule } from 'primeng/inputswitch';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';

import { TabMenuModule } from 'primeng/tabmenu';
import { SetpasswordComponent } from './setpassword/setpassword.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';

import { PaginatorModule } from 'primeng/paginator';

import { TabViewModule } from 'primeng/tabview';
import { PasswordModule } from 'primeng/password';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    TeamComponent,
    DashboardComponent,
    EmployeeDetailsComponent,
  
    LayoutComponent,
    SetpasswordComponent,
    PasswordResetComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,CardModule,
    AppRoutingModule,
    ButtonModule,
    SidebarModule,
    BrowserAnimationsModule,
    InputTextModule,
    FormsModule,
    DropdownModule,
    CheckboxModule,
    CalendarModule,
    RadioButtonModule,
    InputTextareaModule,
   SidebarModule ,
    BrowserAnimationsModule,
    TreeSelectModule,
    ReactiveFormsModule,
    DropdownModule,CheckboxModule,InputTextModule,CalendarModule,

    TabViewModule,
    TableModule,
    InputSwitchModule,
    FileUploadModule,
    FormsModule,
    InputTextModule,
    TabMenuModule,
    PasswordModule
,InputTextModule,
    TabMenuModule,
    PaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
