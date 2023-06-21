import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    TeamComponent,
    DashboardComponent,
    EmployeeDetailsComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
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
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
