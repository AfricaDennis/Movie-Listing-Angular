import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Actor } from './actor';



@Injectable({
  providedIn: 'root'
})
export class ActorService {

  private actorsUrl = 'https://localhost:44382/api/Actors';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*' }),
  };

  constructor( private http: HttpClient ) { }

  
  getActors(): Observable<Actor[]>{
    return this.http.get<Actor[]>(this.actorsUrl).pipe(
      catchError(this.handleError<Actor[]>('getActors', []))
    );
  }

  getActor(id: number): Observable<Actor> {
    
    let url = `${this.actorsUrl}/${id}`;
    return (
      this.http.get<Actor>(url).pipe(
        catchError(this.handleError<Actor>(`getActor id=${id}`))
      ));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  private log(arg0: string) {
    throw new Error('Method not implemented.');
  }


  updateActor(actor: Actor, id: Number): Observable<any> {
    return this.http.put(`${this.actorsUrl}/${id}`, actor, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateActor'))
    );
  }

  addActor(actor: Actor): Observable<any> {
    return this.http.post<Actor>(this.actorsUrl, actor, this.httpOptions).pipe(
      catchError(this.handleError<any>('addMovie'))
    )
  }

  deleteActor(id: number): Observable<Actor>{
    let url = `${this.actorsUrl}/${id}`;
    return this.http.delete<Actor>(url, this.httpOptions).pipe(
      catchError(this.handleError<Actor>('deleteActor'))
    );
  }

}
