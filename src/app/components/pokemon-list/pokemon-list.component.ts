import {Component, OnInit} from '@angular/core';
import {PokeapiService} from "../../services/pokeapi.service";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    NgIf,
    NgOptimizedImage,
    FormsModule
  ],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit {
  pokemonNames: { name: string, front_shiny: string, types: string[] }[] = [];
  filteredPokemon: { name: string, front_shiny: string, types: string[] }[] = [];
  searchTerm: string = '';
  constructor(private pokeapiService: PokeapiService) { }

  ngOnInit(): void {
    this.pokeapiService.getPokemonNames().subscribe((names) => {
      names.forEach((name, index, array) => {
        this.pokeapiService.getPokemon(name).subscribe((data) => {
          this.pokemonNames.push({
            name: data.name,
            front_shiny: data.sprites.front_shiny,
            types: data.types.map(t => t.type.name)
          });

          if (index === array.length - 1) {
            this.filteredPokemon = [...this.pokemonNames];
          }
        });
      });
    });
  }

  searchPokemon(): void {
    this.filteredPokemon = this.pokemonNames.filter(pokemon =>
      pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
