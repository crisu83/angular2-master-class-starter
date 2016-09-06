import { Routes } from '@angular/router';
import { ContactsListViewComponent } from './contacts-list-view/contacts-list-view.component';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';

export const ContactsAppRoutes: Routes = [
  { path: '', component: ContactsListViewComponent },
  { path: 'contacts/:id', component: ContactsDetailViewComponent },
  { path: 'contacts/:id/edit', component: ContactsEditorComponent }
];
