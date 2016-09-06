import { Routes } from '@angular/router';
import { ContactsListViewComponent } from './contacts-list-view';
import { ContactsDetailViewComponent } from './contacts-detail-view';
import { ContactsEditorViewComponent } from './contacts-editor-view';

export const ContactsAppRoutes: Routes = [
  { path: '', component: ContactsListViewComponent },
  { path: 'contacts/:id', component: ContactsDetailViewComponent },
  { path: 'contacts/:id/edit', component: ContactsEditorViewComponent }
];
