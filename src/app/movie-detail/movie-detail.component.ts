import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
// import { MOVIES } from '../mock-movies';
import { Movie } from '../movie';
// import { Location } from '@angular/common';
// import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit, OnChanges {
  @Input() movieId?: number;

  // movies = MOVIES;
  
  movie: Movie | undefined;
  previousMovie: Movie | undefined;


  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    // private location: Location
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['movieId'].currentValue) {
      this.getMovie(changes['movieId'].currentValue).subscribe(movie => {
        this.movie = movie;
      });
    }
    if (changes['movieId'].previousValue) {
      this.getMovie(changes['movieId'].previousValue).subscribe(movie => {
        this.previousMovie = movie;
      });
    }
  }



  TransformHours(movie: Movie): void{
  let TotalMinutes: number = movie.duration;
  let hour = Math.floor(TotalMinutes / 60);
  let minutes =  TotalMinutes - (hour * 60);
  }

  ngOnInit(): void {
    this.getDetails();
  }

  getMovie(id: number): Observable<Movie | undefined> {
    // let id = Number(this.route.snapshot.paramMap.get('id'));
    return this.movieService.getMovie(id).pipe(map((movie: any) => {
      let date = new Date(movie.releaseDate);
      // let formattedDate = `${date.toLocaleDateString('YYYY-mm-DD')}`
      // movie.releaseDate = formattedDate;
      movie.releaseDate = date.toLocaleDateString();
      return movie;
    }));
  }

  goBack(): void {
    this.movie = this.previousMovie;
  }

  closeDetail(){
    this.movie = undefined;
  }


  getDetails(): void{
    // let id = Number(this.route.snapshot.paramMap.get('id'));
    // if (id == 0) {
    //   return;
    // }
    // this.movieService.getMovie(id).subscribe(movie => this.movie = movie);

    // if(this.movie){
    //   this.movieService.updateMovie(this.movie).subscribe(() => this.goBack());
    // }
  }

  


}
