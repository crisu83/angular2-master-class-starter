import { Routes } from "@angular/router";
import { ContactsListComponent } from './contacts-list';
import { ContactsDetailComponent } from "./contacts-detail";

export const ContactsAppRoutes: Routes = [
  { path: '', component: ContactsListComponent },
  { path: 'contacts/:id', component: ContactsDetailComponent }
];
