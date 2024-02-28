import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, throwError} from "rxjs";
import {Pokemon} from "../models/pokemon";
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  private url = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  getPokemon(pokemon: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.url + pokemon).pipe(
      map((data: any) => {
        return new Pokemon(
          data.name,
          { front_shiny: data.sprites.front_shiny },
          data.height,
          data.weight);
      }),
      catchError(error => {
        console.error('Error:', error);
        return throwError(error);
      })
    );
  }

  getPokemonNames(): Observable<string[]> {
    return this.http.get<string[]>(this.url).pipe(
      map((response: any) => {
        return response.results.map((pokemon: any) => pokemon.name);
      }),
      catchError(error => {
        console.error('Error:', error);
        return throwError(error);
      })
    );
  }



}
