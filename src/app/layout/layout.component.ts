import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  items: MenuItem[] | undefined;

  activeItem: MenuItem | undefined;

  ngOnInit() {
      this.items = [
        { label: 'Overview'},
        { label: 'users'},
        { label: 'Team'},
          // { label: 'Home', icon: 'pi pi-fw pi-home' },
          // { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
          // { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
          // { label: 'Documentation', icon: 'pi pi-fw pi-file' },
          // { label: 'Settings', icon: 'pi pi-fw pi-cog' }
      ];

      this.activeItem = this.items[0];
  }
}
