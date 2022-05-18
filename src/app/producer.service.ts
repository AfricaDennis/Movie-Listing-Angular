import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { Producer } from './producer';

@Injectable({
  providedIn: 'root'
})
export class ProducerService {

    private producersUrl = 'https://localhost:44382/api/Producers';
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*'  }),
    }

  constructor(private http: HttpClient) { }

    getProducers(): Observable<Producer[]> {
      return this.http.get<Producer[]>(this.producersUrl).pipe(
        catchError(this.handleError<Producer[]>('getProducers', []))
      );
    }

    getProducer(id: number): Observable<Producer | undefined> {
      let url = `${this.producersUrl}/${id}`; 
      return (
        this.http.get<Producer>(url).pipe(
          catchError(this.handleError<Producer>(`getProducer id=${id}`))
        )
      );
    }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        return of(result as T);
      };
    }

    updateProducer(producer: Producer, id: Number): Observable<any> {
      return this.http.put(`${this.producersUrl}/${id}`, producer, this.httpOptions).pipe(
        catchError(this.handleError<any>('updateMovie'))
      );
    }
  
    addProducer(producer: Producer): Observable<any> {
      return this.http.post<Producer>(this.producersUrl, producer, this.httpOptions).pipe(
        catchError(this.handleError<any>('addMovie'))
      )
    }

    deleteProducer(id: number): Observable<Producer>{
      let url = `${this.producersUrl}/${id}`;
      return this.http.delete<Producer>(url, this.httpOptions).pipe(
        catchError(this.handleError<Producer>('deleteProducer'))
      );
    }

}
