import { Routes } from "@angular/router";
import { ContactsListComponent } from './contacts-list';
import { ContactsDetailComponent } from "./contacts-detail";
import { ContactsEditorComponent } from "./contacts-editor";

export const ContactsAppRoutes: Routes = [
  { path: '', component: ContactsListComponent },
  { path: 'contacts/:id', component: ContactsDetailComponent },
  { path: 'contacts/:id/edit', component: ContactsEditorComponent }
];
