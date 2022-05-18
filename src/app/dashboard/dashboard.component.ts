import { Component, OnInit } from '@angular/core';
import { ActorService } from '../actor.service';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { Actor } from '../actor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  movies: Movie[] = [];
  actors: Actor[] = [];


  constructor(private movieService: MovieService, private actorService: ActorService) { }

  ngOnInit(): void {
    this.getMovies();
    this.getActor();
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe(movies => this.movies);
  }

  getActor(): void {
    this.actorService.getActors().subscribe(actors => this.actors);
  }

}
