import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPokemonComponent } from './components/form-pokemon/form-pokemon.component';

const routes: Routes = [
{ path: ' ', redirectTo: 'home'},
{ path: 'home', component: HomeComponent },
{ path: '**', redirectTo: 'home' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
