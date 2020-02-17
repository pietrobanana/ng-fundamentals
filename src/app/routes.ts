import { Routes } from '@angular/router';
import { EventsListComponent,
         EventDetailsComponent,
         CreateEventComponent,
         EventRouteActivator,
         EventListResolver,
         CreateSessionComponent
          } from './events/index';
import { Error404Component } from './errors/404.component';

export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate:['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: {events:EventListResolver}}, //If the url maches the word 'events' then take the user to EventListComponent.
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] }, //This will take the user to a specific event. "/events/1 or /events/foo "
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren:'./user/user.module#UserModule'}

]