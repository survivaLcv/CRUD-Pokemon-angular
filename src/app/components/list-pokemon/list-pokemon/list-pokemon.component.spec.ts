import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ListPokemonComponent } from './list-pokemon.component';


describe('ListPokemonComponent', () => {
  let component: ListPokemonComponent;
  let fixture: ComponentFixture<ListPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 /** describe(' Method getAllPokemonts() called ', ()=>{

    it('should return a list of pokemons ',()=>{
      const lstpkm = [
        {
            "id": null,
            "name": null,
            "image": null,
            "attack": null,
            "defense": null,
            "hp": null,
            "type": null,
            "idAuthor": null
        }];
      spyOn(component._pokemonServices, 'getPokemons' ).and.returnValue(of({ lstPokemons: []}));
      component.getAllPokemonts();
      expect(component.lstPokemons).toHaveSize(1);
      expect(component.error).toBeFalsy;

    })

  });  */
});
