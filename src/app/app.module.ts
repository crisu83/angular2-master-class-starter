import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';
import { API_ENDPOINT } from './app.tokens';
import { ContactsAppRoutes } from './app.routes';
import { ContactsService } from './contacts.service';
import { ContactsAppComponent } from './contacts.component';
import { ContactsHeaderComponent } from './contacts-header/contacts-header.component'
import { ContactsListViewComponent } from './contacts-list-view/contacts-list-view.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { ContactsEditorViewComponent } from './contacts-editor-view/contacts-editor-view.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';

@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsHeaderComponent,
    ContactsListViewComponent,
    ContactsListComponent,
    ContactsDetailViewComponent,
    ContactsDetailComponent,
    ContactsEditorViewComponent,
    ContactsEditorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ContactsAppRoutes),
    HttpModule,
    FormsModule
  ],
  bootstrap: [ContactsAppComponent],
  providers: [
    ContactsService, // shorthand syntax for: { provide: ContactsService, useClass: ContactsService }
    { provide: API_ENDPOINT, useValue: '//localhost:4201/api' }
  ]
})
export class ContactsModule {

}
