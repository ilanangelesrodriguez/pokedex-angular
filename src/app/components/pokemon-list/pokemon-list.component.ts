import {Component, OnInit} from '@angular/core';
import {PokeapiService} from "../../services/pokeapi.service";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit {
  pokemonNames: string[] = [];
  constructor(private pokeapiService: PokeapiService) { }

  ngOnInit(): void {
    this.pokeapiService.getPokemonNames().subscribe((data) => {
      this.pokemonNames = data;
    });
  }

}
