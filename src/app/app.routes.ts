import { Routes } from '@angular/router';
import { ContactsDetailViewComponent } from './contacts-detail-view';
import { ContactsEditorViewComponent } from './contacts-editor-view';
import { ContactsDashboardComponent } from './contacts-dashboard';

export const ContactsAppRoutes: Routes = [
  {
    path: '',
    component: ContactsDashboardComponent,
    children: [
      { path: '', redirectTo: 'contacts/0' },
      { path: 'contacts/:id', component: ContactsDetailViewComponent },
      { path: 'contacts/:id/edit', component: ContactsEditorViewComponent }
    ]
  }
];
