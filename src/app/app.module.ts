import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Test1Component } from './test1/test1.component';
import { PopoverModule, PopoverConfig } from 'ngx-bootstrap/popover';
import { ProgressbarModule,ProgressbarConfig } from 'ngx-bootstrap/progressbar';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { InputMaskModule } from '@ngneat/input-mask';
import { MasktComponent } from './maskt/maskt.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    MasktComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, PopoverModule, ProgressbarModule,NgxMaskModule,
    NgxMaskModule.forRoot(maskConfig),InputMaskModule.forRoot({ inputSelector: 'input', isAsync: true })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//function maskConfig(maskConfig: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  //throw new Error('Function not implemented.');
//}

