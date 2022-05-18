import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MoviesComponent } from './movies/movies.component';
import { ActorsComponent } from './actors/actors.component';
import { ProducersComponent } from './producers/producers.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { ActorFormComponent } from './actor-form/actor-form.component';
import { ProducerFormComponent } from './producer-form/producer-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'detail/:id', component: MovieFormComponent },
  { path: 'formMovie/:id', component: MovieFormComponent },
  { path: 'formProducer/:id', component: ProducerFormComponent },
  { path: 'formActor/:id', component: ActorFormComponent},
  { path: 'movies', component: MoviesComponent },
  { path: 'actors', component: ActorsComponent },
  { path: 'producers', component: ProducersComponent },
  { path: 'formMovie', component: MovieFormComponent },
  { path: 'formActor', component: ActorFormComponent },
  { path: 'formProducer', component: ProducerFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
