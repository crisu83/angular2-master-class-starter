import { Routes } from "@angular/router";
import { ContactsListComponent } from './contacts-list';
import { ContactsDetailViewComponent } from './contacts-detail-view';
import { ContactsEditorComponent } from "./contacts-editor";

export const ContactsAppRoutes: Routes = [
  { path: '', component: ContactsListComponent },
  { path: 'contacts/:id', component: ContactsDetailViewComponent },
  { path: 'contacts/:id/edit', component: ContactsEditorComponent }
];
