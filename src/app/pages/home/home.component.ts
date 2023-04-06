import { PokemonsService } from 'src/app/services/pokemons.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isNewForm: boolean = true;
  isEditing: boolean = true;
  pokemonObj : any
  constructor(private _pokemonServices :  PokemonsService) {
  }

  ngOnInit(): void {
  }

  showForm(value :boolean){
    this.isNewForm = value;
  }

  showFormEdit(value :boolean){
    this.isEditing = value;
  }

  showFormNew(value :boolean){
    this.isNewForm = value;
  }


  pkmEmiter(pokemon : Pokemon){
    this.pokemonObj= pokemon;
  }

  sendPutPokemon(){
    let requestPkm = {
      ...this.pokemonObj
    }

    this._pokemonServices.updatePokemon(requestPkm.id, requestPkm).subscribe({
      next: (res: any) => {
        window.location.reload();
      },
      error: (error) => {
        console.log("Error ", error);
      }
    }
    )
  }

  cancelar(){
    this.isEditing = true;
  }
}
