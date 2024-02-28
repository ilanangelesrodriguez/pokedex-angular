import { Component } from '@angular/core';
import { PokeapiService } from './services/pokeapi.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {RouterModule, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterOutlet
  ],
  providers: [
    HttpClient,
    PokeapiService
  ]
})
export class AppComponent {
  title = 'pokedex-angular';

  constructor(private pokeapiService: PokeapiService) { }

}
