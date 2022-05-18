import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, Observable, of } from 'rxjs';
import { Movie } from './movie';
// import { MOVIES } from './mock-movies';

@Injectable({
  providedIn: 'root',
})
export class MovieService {

  private moviesUrl = 'https://localhost:44382/api/Movies';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*'  }),
  };
  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.moviesUrl, this.httpOptions).pipe(
      catchError(this.handleError<Movie[]>('getMovies', []))
    );
  }

  getMovie(id: number): Observable<Movie> {
    let url = `${this.moviesUrl}/${id}`;
    return (this.http.get<Movie>(url).pipe(
      catchError(this.handleError<Movie>(`getMovie id=${id}`))));
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)
      return of(result as T);
    };
  }
  private log(arg0: string) {
    throw new Error('Method not implemented.');
  }

  updateMovie(movie: Movie, id: Number): Observable<any> {
    return this.http.put(`${this.moviesUrl}/${id}`, movie, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateMovie'))
    );
  }

  addMovie(movie: Movie): Observable<any> {
    return this.http.post<Movie>(this.moviesUrl, movie, this.httpOptions).pipe(
      catchError(this.handleError<any>('addMovie'))
    );
  }

  deleteMovie(id: number): Observable<Movie>{
    let url = `${this.moviesUrl}/${id}`;
    return this.http.delete<Movie>(url, this.httpOptions).pipe(
      catchError(this.handleError<Movie>('deleteMovie'))
    );
  }

}
