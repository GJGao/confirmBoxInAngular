import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxPopupModule, DxButtonModule, DxTemplateModule } from 'devextreme-angular';


import { AppComponent } from './app.component';


@NgModule({
  imports: [
      BrowserModule,
      DxPopupModule,
      DxButtonModule,
      DxTemplateModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
