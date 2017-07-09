import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../components/home/home.component';
import {RegisterComponent} from '../components/register/register.component';
import {CoursesComponent} from '../components/courses/courses.component';
import {AboutUsComponent} from '../components/about-us/about-us.component';
const routes:Routes=[
  { path: '', redirectTo: '/app-home', pathMatch: 'full' },
  { path: 'app-home',  component: HomeComponent },
  { path: 'app-register',  component: RegisterComponent },
  { path: 'app-courses',  component: CoursesComponent },
  { path: 'app-about-us',  component: AboutUsComponent }

]
@NgModule({
  imports: [ CommonModule,RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
