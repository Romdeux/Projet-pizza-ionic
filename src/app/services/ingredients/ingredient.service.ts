import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class Ingredient {
  id: string;
  name: string;
}

@Injectable()
export class IngredientService {

  constructor(private http: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  url = 'https://api.ynov.jcatania.io/ingredient';

  addIngredient(ingredient: Ingredient): Observable<any> {
    return this.http.post<Ingredient>(this.url, ingredient, this.httpHeader)
      .pipe(
        catchError(this.handleError<Ingredient>('Add Ingredient'))
      );
  }

  getIngredient(id): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.url + id)
      .pipe(
        tap(_ => console.log(`Ingredient fetched: ${id}`)),
        catchError(this.handleError<Ingredient[]>(`Get ingredient id=${id}`))
      );
  }

  getIngredientList(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.url)
      .pipe(
        tap(Ingredient => console.log('Ingredient fetched!')),
        catchError(this.handleError<Ingredient[]>('Get ingredient', []))
      );
  }

  updateIngredient(id, ingredient: Ingredient): Observable<any> {
    return this.http.put(this.url + id, ingredient, this.httpHeader)
      .pipe(
        tap(_ => console.log(`Ingredient updated: ${id}`)),
        catchError(this.handleError<Ingredient[]>('Update ingredient'))
      );
  }

  deleteIngredient(id): Observable<Ingredient[]> {
    return this.http.delete<Ingredient[]>(this.url + id, this.httpHeader)
      .pipe(
        tap(_ => console.log(`Ingredient deleted: ${id}`)),
        catchError(this.handleError<Ingredient[]>('Delete ingredient'))
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
