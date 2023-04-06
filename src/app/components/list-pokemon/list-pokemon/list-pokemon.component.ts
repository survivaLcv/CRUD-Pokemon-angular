import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {

  lstPokemons : Array<Pokemon> = [];
  searchText : string ="";
  pokemon : any;
  error: boolean = false;
  @Output() isNewPokemon = new EventEmitter();
  @Output() isEdit = new EventEmitter();
  @Output() pokemonEmiter = new EventEmitter();
  constructor(public _pokemonServices :  PokemonsService) { }

  ngOnInit(): void {
    this.getAllPokemonts();
  }

  getAllPokemonts(){
    this._pokemonServices.getPokemons().subscribe(
      {
        next: (res: any) => {
          this.error = false;
          this.lstPokemons=res;
          console.log("lstPokemons",this.lstPokemons);
        },
        error: (error) => {
          console.log("Error ", error);
          this.error = true;
        }

    });
  }

  newPokemon(){
   console.log("Nuevo pokemon")
   this.isNewPokemon.emit(false)
  }

  updatePkm(id:any){
    this.isEdit.emit(false)
    this._pokemonServices.getCurrentPokemon(id).subscribe({
      next: (res: any) => {
        this.error = false;
        console.log('resp deleted', res);
        this.pokemonEmiter.emit(res);
        this.isNewPokemon.emit(true);
      },
      error: (error) => {
        console.log("Error ", error);
        this.error = true;
      }
    });


  }

  deletePkm(id:any){
    console.log("deletePkm pokemon", id);
    this._pokemonServices.deletePokemon(id).subscribe({
      next: (res: any) => {
        console.log('resp deleted', res);
        this.getAllPokemonts();
      },
      error: (error) => {
        console.log("Error ", error);
      }
    });
  }

}