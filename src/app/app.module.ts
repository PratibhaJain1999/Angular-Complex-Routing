import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
const appRoutes:Routes=[
  {path:'',component:RestaurantListComponent},
  { path:'rest-details/:id',component:RestaurantDetailsComponent },
  { path:'**',component: AppComponent}
 ]

@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    RestaurantDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
