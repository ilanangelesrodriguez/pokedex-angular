import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../../models/pokemon";
import {PokeapiService} from "../../services/pokeapi.service";
import {ActivatedRoute, RouterLink} from '@angular/router';
import {NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf,
    RouterLink
  ],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent implements OnInit {
  pokemon: Pokemon | undefined;

  constructor(private pokeapiService: PokeapiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const pokemonName = params['name'];
      this.pokeapiService.getPokemon(pokemonName).subscribe((data) => {
        this.pokemon = new Pokemon(
          data.name,
          {
            front_shiny: data.sprites.front_shiny,
            other: {
              dream_world: {
                front_default: data.sprites.other?.dream_world.front_default
              }
            }
          },
          data.types,
          data.height,
          data.weight
        );
      });
    });
  }

  getPokemonDetails(pokemonName: string): void {
    this.pokeapiService.getPokemon(pokemonName).subscribe((data) => {
      this.pokemon = new Pokemon(
        data.name,
        {
          front_shiny: data.sprites.front_shiny,
          other: {
            dream_world: {
              front_default: data.sprites.other.dream_world.front_default
            }
          }
        },
        data.types,
        data.height,
        data.weight
      );
    });
  }

}
