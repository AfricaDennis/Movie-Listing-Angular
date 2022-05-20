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


  imgCollection: Array<object> = [
    {
      image: 'https://i.pinimg.com/originals/66/24/96/6624960f0062bd8b8845037c6776277c.jpg',
      thumbImage: 'https://i.pinimg.com/originals/66/24/96/6624960f0062bd8b8845037c6776277c.jpg',
      alt: 'Malefica',
      title: 'Malefica',
    },
    {
      image: 'https://i.pinimg.com/originals/86/c9/95/86c99524a11559e72accc219032ab135.jpg',
      thumbImage: 'https://i.pinimg.com/originals/86/c9/95/86c99524a11559e72accc219032ab135.jpg',
      title: 'Let Me In',
      alt: 'Let Me In',
    },
    {
      image: 'https://static.posters.cz/image/hp/63119.jpg',
      thumbImage: 'https://static.posters.cz/image/hp/63119.jpg',
      title: 'Harry Potter and the philosophers stone',
      alt: 'Harry Potter and the philosophers stone',
    },
    {
      image: 'https://s3-eu-west-1.amazonaws.com/abandomedia/db/poster/db_posters_40846.jpg',
      thumbImage: 'https://s3-eu-west-1.amazonaws.com/abandomedia/db/poster/db_posters_40846.jpg',
      title: 'Annabele',
      alt: 'Annabele',
    },
    {
      image: 'https://img.ecartelera.com/noticias/fotos/10300/10304/1.jpg',
      thumbImage: 'https://img.ecartelera.com/noticias/fotos/10300/10304/1.jpg',
      title: 'Avengers',
      alt: 'Avengers',
    },
  ];
}

