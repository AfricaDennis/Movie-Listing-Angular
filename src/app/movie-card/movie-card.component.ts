import { Component, Input, EventEmitter, OnInit, Output, } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: any;
  @Output() onMovieSelected = new EventEmitter<number>();
  @Output() onMovieDeleted = new EventEmitter<number>();
  selectedMovie?: Movie;
  movies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    console.log('movies component initializing');
  }

  onSelect(movie: Movie): void {
    console.log(movie.id)
    this.onMovieSelected.next(movie.id);
  }

  delete(movie: Movie): void{
    this.movies = this.movies.filter(m => m != movie);
    this.movieService.deleteMovie(movie.id).subscribe();
    this.onMovieDeleted.emit(movie.id);
  }

}
