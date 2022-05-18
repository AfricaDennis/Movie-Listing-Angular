import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ActorsComponent } from './actors/actors.component';
import { ActorCardComponent } from './actor-card/actor-card.component';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';
import { ProducersComponent } from './producers/producers.component';
import { ProducerCardComponent } from './producer-card/producer-card.component';
import { ProducerDetailComponent } from './producer-detail/producer-detail.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { ActorFormComponent } from './actor-form/actor-form.component';
import { ProducerFormComponent } from './producer-form/producer-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MovieService } from './movie.service';
import { ActorService } from './actor.service';
import { ProducerService } from './producer.service';

import {NgSelectModule, NgOption} from '@ng-select/ng-select';






@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieCardComponent,
    MovieDetailComponent,
    DashboardComponent,
    NavBarComponent,
    ActorsComponent,
    ActorCardComponent,
    ActorDetailComponent,
    ProducersComponent,
    ProducerCardComponent,
    ProducerDetailComponent,
    MovieFormComponent,
    ActorFormComponent,
    ProducerFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [
    MovieService,
    ActorService,
    ProducerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
