import { Component, NgModule, enableProdMode, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxPopupModule, DxPopupComponent,DxButtonModule, DxTemplateModule, DxDataGridComponent } from 'devextreme-angular';
import { Employee, Service } from './app.service';
import { confirm  as dconfirm}  from 'devextreme/ui/dialog';


@Component({
    selector: 'demo-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [Service]
})

export class AppComponent {
    // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
    @ViewChild(DxPopupComponent) popup: DxPopupComponent;
    // hideOrNot: Boolean = false; 
    public closeConfirmed: Boolean = false;
    currentEmployee: Employee = new Employee();
    employees: Employee[];
    popupVisible = false;

    constructor(service: Service) {
        this.employees = service.getEmployees();
    }

    showInfo(employee) {
        this.currentEmployee = employee;
        this.popupVisible = true;
    }

    myfunc(options: any) {
    //   const result = dconfirm("Are you sure?", "Confirm changes");
    //   result.then((dialogResult: any) => {
    //     if(dialogResult) {
    //       e.cancel= true;
    //     }
    // });
      const p= this.popup.instance;
      console.log(options);
      if (!this.closeConfirmed) {
        options.cancel = true;
        var result = dconfirm('Are you sure you want to close this window?', 'Close');
        result.then( (dialogResult) => {
          if (dialogResult) { // Yes: confirm close
            this.closeConfirmed= true
            p.hide()
            this.closeConfirmed= false;
          }  else { // No: don't close popup
            this.closeConfirmed= false;
          }
        })
      }
    }
}
