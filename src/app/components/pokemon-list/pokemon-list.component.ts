import {Component, OnInit} from '@angular/core';
import {PokeapiService} from "../../services/pokeapi.service";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit {
  pokemonNames: { name: string, front_shiny: string, types: string[] }[] = [];
  constructor(private pokeapiService: PokeapiService) { }

  ngOnInit(): void {
    this.pokeapiService.getPokemonNames().subscribe((names) => {
      names.forEach(name => {
        this.pokeapiService.getPokemon(name).subscribe((data) => {
          this.pokemonNames.push({
            name: data.name,
            front_shiny: data.sprites.front_shiny,
            types: data.types.map(t => t.type.name) // Agrega los tipos aquí
          });
        });
      });
    });
  }
}
