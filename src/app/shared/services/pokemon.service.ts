import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroments } from '../enviroments/enviroments.prod';
import { IPokemon } from '../interfaces/IPokemon';
import { IPokemonDetail } from '../interfaces/IPokemonDetail';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl: string = enviroments.api;

  constructor(private http: HttpClient) { }

  getPokemonByIdOrName(id: number, name: string) {

  }

  getPokemons(): Observable<IPokemon> {
    return this.http.get<IPokemon>(`${this.apiUrl}/pokemon`);
  }

  getPokemonByLink(url: string): Observable<IPokemonDetail> {
    return this.http.get<IPokemonDetail>(url);
  }
}
