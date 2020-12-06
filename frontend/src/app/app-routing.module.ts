import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventListComponent} from "./event-list/event-list.component";
import {HomeComponent} from "./home/home.component";
import {EventFormComponent} from "./event-form/event-form.component";
import {UserListComponent} from "./user-list/user-list.component";
import {UserFormComponent} from "./user-form/user-form.component";
import {GroupFormComponent} from "./group-form/group-form.component";
import {GroupListComponent} from "./group-list/group-list.component";
import {StateListComponent} from "./state-list/state-list.component";
import {StateFormComponent} from "./state-form/state-form.component";
import {EventTypeListComponent} from "./event-type-list/event-type-list.component";
import {EventTypeFormComponent} from "./event-type-form/event-type-form.component";
import {UserEventListComponent} from "./user-event-list/user-event-list.component";
import {UserEventFormComponent} from "./user-event-form/user-event-form.component";
import {UserGroupListComponent} from "./user-group-list/user-group-list.component";
import {UserGroupFormComponent} from "./user-group-form/user-group-form.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'user-list', component: UserListComponent},
  {path: 'user-form', component: UserFormComponent},
  {path: 'user-form/:pk', component: UserFormComponent},
  {path: 'event-list', component: EventListComponent},
  {path: 'event-form', component: EventFormComponent},
  {path: 'event-form/:pk', component: EventFormComponent},
  {path: 'group-list', component: GroupListComponent},
  {path: 'group-form', component: GroupFormComponent},
  {path: 'group-form/:pk', component: GroupFormComponent},
  {path: 'state-list', component: StateListComponent},
  {path: 'state-form', component: StateFormComponent},
  {path: 'state-form/:pk', component: StateFormComponent},
  {path: 'event-type-list', component: EventTypeListComponent},
  {path: 'event-type-form', component: EventTypeFormComponent},
  {path: 'event-type-form/:pk', component: EventTypeFormComponent},
  {path: 'user-event-list', component: UserEventListComponent},
  {path: 'user-event-form', component: UserEventFormComponent},
  {path: 'user-event-form/:pk', component: UserEventFormComponent},
  {path: 'user-group-list', component: UserGroupListComponent},
  {path: 'user-group-form', component: UserGroupFormComponent},
  {path: 'user-group-form/:pk', component: UserGroupFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
