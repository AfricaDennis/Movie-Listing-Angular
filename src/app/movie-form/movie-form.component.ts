import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { TimePipe } from '../pipes/timePipe';
import { Actor } from '../actor';
import { ActorService } from '../actor.service';
import { Producer } from '../producer';
import { ProducerService } from '../producer.service';
import { Location } from '@angular/common';
import {
  HttpClient,
  HttpErrorResponse,
  HttpEventType,
  HttpProgressEvent,
} from '@angular/common/http';
import { map, Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss'],
})
export class MovieFormComponent implements OnInit {
  // @Input() movie: any;
  // @Output() onMovieAdd = new EventEmitter<any>();
  // movies: Movie[] = [];

  movieForm: FormGroup;

  // movie = new Movie(1, 'bee movie', new Date(2022, 5, 4), Number(150), 'Una abeja es to flama y tiene un romance con una pava, la pelicula', 'imagestring', 'Robert Pattinson', 'Marvel Studios');
  movie: any;
  timePipe = new TimePipe();
  actorsList: Actor[] = [];
  producersList: Producer[] = [];
  id: Number = 0;
  isNewContext = false;
  base64Output: string | any;
  imageList: any;
  file: any;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private movieService: MovieService,
    private producerService: ProducerService,
    private actorService: ActorService,
    private http: HttpClient
  ) {
    // GET ID FROM ROUTE, IF ID IS NOT IN THE ROUTE = NEW MOVIE.
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    // GET THE MOVIE FROM THE DB USING THE API THAT HAS THAT ID
    this.movieForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      releaseDate: new FormControl(''),
      duration: new FormControl(''),
      synopsis: new FormControl(''),
      image: new FormControl(''),
      actorIds: new FormControl([]),
      producerIds: new FormControl([]),
    });

    let id = Number(this.route.snapshot.paramMap.get('id'));

    // if (this.id !== 0) return;
    // this.movieService.getMovie(this.id).subscribe((movie) => {
    //   this.isNewContext = false;
    //   this.movie = movie;
    //   this.setFormValues(movie);
    // });
    if (!id) {
      this.isNewContext = true;
      return;
    } else {
      this.movieService.getMovie(id).subscribe((movie) => {
        this.movie = movie;
        this.setFormValues(movie);
      });
    }
    this.id = id;     

    // SET THE FORM IF WE HAVE A MOVIE
  }



  ngOnInit(): void {
    this.getActors();
    this.getProducers();
  }

  // actors = ['Benedict Cumberbatch', 'Jude Law', 'Robert Pattinson'];

  // producers = ['Marvel Studios', 'Heyday Films', 'DC Films'];

  // movie = new Movie(4,'','','','','','','');

  submitted = false;

  onSubmit() {
    // IF THE ID EXISTS, UPDATE, ELSE CREATE NEW
    this.submitted = true;
    console.warn(this.movieForm.value);
  }

  setFormValues(movie: any) {
    // ONLY IF THERE IS AN ID IN THE ROUTE
    this.movieForm.controls['id'].setValue(movie.id);
    this.movieForm.controls['name'].setValue(movie.name);
    this.movieForm.controls['releaseDate'].setValue(
      this.movie.releaseDate != null
        ? new Date(this.movie.releaseDate).toISOString().substring(0, 10)
        : this.movie.date
    );
    this.movieForm.controls['duration'].setValue(movie.duration);
    this.movieForm.controls['synopsis'].setValue(movie.synopsis);
    this.movieForm.controls['image'].setValue(movie.image);
    this.movieForm.controls['actorIds'].setValue(movie.actorIds);

    this.movieForm.controls['producerIds'].setValue(movie.producerIds);
    console.log(movie.producerIds);
  }

  getActors() {
    this.actorService.getActors().subscribe((actors) => {
      this.actorsList = actors;
      console.log(actors);
    });
  }

  getProducers() {
    this.producerService.getProducers().subscribe((producers) => {
      this.producersList = producers;
      console.log(producers);
    });
  }

  goBack() {
    this.location.back();
  }

  save() {
    console.log(this.movieForm.getRawValue());
    console.log(this.isNewContext);
    if (!this.movieForm.valid) return;
    if (!this.isNewContext) {
      let request = {
        ...this.movieForm.getRawValue(),
      };
      this.movieService
        .updateMovie(request, this.id)
        .subscribe(() => this.goBack());
    } else {
      let request = {
        ...this.movieForm.getRawValue(),
      };
      console.log(request);
      this.movieService.addMovie(request).subscribe(() => this.goBack());
    }
  }



  
}
