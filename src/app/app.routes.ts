import { Routes } from '@angular/router';
import { AddressFormComponent } from './address-form/address-form.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
  { path: '', component: HomeComponent }, // Home route
  { path: 'address-form', component: AddressFormComponent }, // Address Form route
];