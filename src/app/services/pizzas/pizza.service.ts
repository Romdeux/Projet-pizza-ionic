import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class Pizza {
  id: string;
  name: string;
  photo: string;
  prix: string;
  ingredients: [];
}

@Injectable()
export class PizzaService {

  constructor(private http: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  url = 'https://api.ynov.jcatania.io/pizza';

  addPizza(pizza: Pizza): Observable<any> {
    return this.http.post<Pizza>(this.url, pizza, this.httpHeader)
      .pipe(
        catchError(this.handleError<Pizza>('Add Pizza'))
      );
  }

  getPizza(id): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(this.url + id)
      .pipe(
        tap(_ => console.log(`Pizza fetched: ${id}`)),
        catchError(this.handleError<Pizza[]>(`Get pizza id=${id}`))
      );
  }

  getPizzaList(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(this.url)
      .pipe(
        tap(Pizza => console.log('Pizza fetched!')),
        catchError(this.handleError<Pizza[]>('Get pizza', []))
      );
  }

  updatePizza(id, pizza: Pizza): Observable<any> {
    return this.http.put(this.url + id, pizza, this.httpHeader)
      .pipe(
        tap(_ => console.log(`Pizza updated: ${id}`)),
        catchError(this.handleError<Pizza[]>('Update pizza'))
      );
  }

  deletePizza(id): Observable<Pizza[]> {
    return this.http.delete<Pizza[]>(this.url + id, this.httpHeader)
      .pipe(
        tap(_ => console.log(`Pizza deleted: ${id}`)),
        catchError(this.handleError<Pizza[]>('Delete pizza'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
