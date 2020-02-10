import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create.event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event.route.activator.service';
import { EventListResolver } from './events/events-list-resolver.service';


export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate:['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: {events:EventListResolver}}, //If the url maches the word 'events' then take the user to EventListComponent.
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] }, //This will take the user to a specific event. "/events/1 or /events/foo "
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren:'./user/user.module#UserModule'}

]