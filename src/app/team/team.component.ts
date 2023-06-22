import { Component } from '@angular/core';
import { Form, FormGroup,FormControl } from '@angular/forms';



@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  sidebarVisible: boolean = false;
  checked: boolean = false;
 
  teamForm:FormGroup=new FormGroup({
    name:new FormControl(''),
    TeamLead:new FormControl(''),
    checked:new FormControl(''),
    Experience:new FormControl(''),
    salary:new FormControl(''),
    date:new FormControl(''),

  })

  employeeName=["maha",'joisf']
  teamLead=["maha",'joisf']


}
