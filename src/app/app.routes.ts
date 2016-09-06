import { Routes } from '@angular/router';
import { ContactsDetailViewComponent } from './contacts-detail-view';
import { ContactsEditorViewComponent } from './contacts-editor-view';
import { ContactsDashboardComponent } from './contacts-dashboard';
import { AboutComponent } from './about/about.component';
import { CONFIRM_NAVIGATION_GUARD } from './app.tokens';

export const ContactsAppRoutes: Routes = [
  {
    path: '',
    component: ContactsDashboardComponent,
    children: [
      { path: '', redirectTo: 'contacts/0' },
      { path: 'contacts/:id', component: ContactsDetailViewComponent },
      {
        path: 'contacts/:id/edit',
        component: ContactsEditorViewComponent,
        canDeactivate: [CONFIRM_NAVIGATION_GUARD]
      }
    ]
  },
  { path: 'about', component: AboutComponent }
];
