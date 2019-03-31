import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [WelcomeComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
