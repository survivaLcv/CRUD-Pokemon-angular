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
    console.log("value home" , value)
    this.isNewForm = value;
  }

  showFormEdit(value :boolean){
    console.log("value showFormEdit" , value)
    this.isEditing = value;
  }

  showFormNew(value :boolean){
    console.log("showFormNew home" , value)
    this.isNewForm = value;
  }


  pkmEmiter(pokemon : Pokemon){
    console.log("pkm pkm" , pokemon)
    this.pokemonObj= pokemon;
  }

  sendPutPokemon(){
    console.log("sendPutPokemon");
    let requestPkm = {
      ...this.pokemonObj
    }

    console.log("requestPkm", this.pokemonObj);
    this._pokemonServices.updatePokemon(requestPkm.id, requestPkm).subscribe({
      next: (res: any) => {
        console.log('resp updated', res);
        window.location.reload();
      },
      error: (error) => {
        console.log("Error ", error);
      }
    }
    )
  }

  cancelar(){
    console.log("cancelar ");
    this.isEditing = true;
    console.log("isEditing ", this.isEditing);
  }
}
