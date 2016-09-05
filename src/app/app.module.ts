import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ContactsAppComponent } from './contacts.component';
import { ContactsHeaderComponent } from './contacts-header/contacts-header.component'
import { ContactsService } from './contacts.service';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsAppRoutes } from "./app.routes";
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import 'rxjs/add/operator/map';

@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsHeaderComponent,
    ContactsListComponent,
    ContactsDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ContactsAppRoutes),
    HttpModule
  ],
  bootstrap: [ContactsAppComponent],
  providers: [
    ContactsService // or { provide: ContactsService, useClass: ContactsService }
  ]
})
export class ContactsModule {

}
