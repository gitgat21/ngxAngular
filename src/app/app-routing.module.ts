import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasktComponent } from './maskt/maskt.component';
import { Test1Component } from './test1/test1.component';

const routes:Routes=[{path:'test', component:Test1Component},
{path:'', component:Test1Component},
{path:'maskt',component:MasktComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
