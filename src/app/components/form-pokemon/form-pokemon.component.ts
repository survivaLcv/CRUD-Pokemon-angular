import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-form-pokemon',
  templateUrl: './form-pokemon.component.html',
  styleUrls: ['./form-pokemon.component.scss']
})
export class FormPokemonComponent implements OnInit {

  @Input() pokemonEdit =  new EventEmitter();
  @Output() cancelarForm =  new EventEmitter();
  private unsubscribe$ = new Subject<void>();
  pokemonForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    attack: new FormControl('', Validators.required),
    defense: new FormControl('', Validators.required),
    idAuthor:new FormControl('1',),
  });

  atk:any=0;
  def:any=0;
  error:boolean=false;
  isEditing:boolean=false;

  constructor(private _pokemonServices : PokemonsService ) { }

  ngOnInit(): void {
  }

  createPokemon(){
    this._pokemonServices.addPokemon(this.pokemonForm.value)
    .pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (res: any) => {
        window.location.reload();
        this.reset();
      },
      error: (error) => {
        console.log("Error ", error);
      }
    });
  }

  reset() {
    this.pokemonForm.reset();
    this.cancelarForm.emit(true);
  }

}
