import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FormPokemonComponent } from './components/form-pokemon/form-pokemon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListPokemonComponent } from './components/list-pokemon/list-pokemon/list-pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filterPipes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormPokemonComponent,
    ListPokemonComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
