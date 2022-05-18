import { Component, OnInit } from '@angular/core';
// import { MOVIES } from '../mock-movies';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  template: ``
})
export class MoviesComponent implements OnInit {

  // movies = MOVIES;
  movies: Movie[] = [];
  selectedMovie?: number;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  // onSelect(event: any): void {
  //   this.selectedMovie = movie;
  // } 

  onSelect(event: any): void {
    console.log(event)
    this.selectedMovie = event;
  }


  getMovies(): void {
    // this.movieService.getMovies().subscribe(movies => this.movies = movies);
    this.movieService.getMovies().subscribe(movies => {
      this.movies = movies;
      console.log(this.movies);
    });
  }

  delete(movieId: number): void {
    this.movieService.deleteMovie(movieId).subscribe();
    this.movies = this.movies.filter((f) => f.id != movieId);
  }

}
