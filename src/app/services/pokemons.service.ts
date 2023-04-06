import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiURL;
  }

  getPokemons(): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>( this.baseUrl+'?idAuthor=1');
  }

  deletePokemon(pokemonId:number){
    return this.http.delete( this.baseUrl+pokemonId);
  }

  addPokemon(pokemon: Pokemon){
    return this.http.post<Pokemon>( this.baseUrl, pokemon);
  }

  getCurrentPokemon(pokemonId:number){
    return this.http.get<Pokemon>( this.baseUrl + pokemonId);
  }

  updatePokemon(pokemonId:number, pokemon: Pokemon){
    return this.http.put<Pokemon>( this.baseUrl + pokemonId, pokemon);
  }
}
