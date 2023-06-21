import { Component,OnInit} from '@angular/core';

interface City {
  name: string;
  code: string;
}


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})

export class EmployeeDetailsComponent implements OnInit {
  
  value:any
  cities: City[] | undefined;

  selectedCity: City | undefined;
  selectedCities: string[] = [];
  date: any;
  ingredient!: string;

  disabled: boolean = false;

  
  constructor() { }
  ngOnInit(): void {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
  ];
}
sidebarVisible: boolean = false;

  }
 


