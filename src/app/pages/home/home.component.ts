import { HttpErrorResponse } from '@angular/common/http';
import { IPokemon, IPokemonResult } from './../../shared/interfaces/IPokemon';
import { PokemonService } from './../../shared/services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { forkJoin, switchMap } from 'rxjs';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faBolt, faBrain, faBug, faDragon, faFeatherAlt, faFire, faFistRaised, faGem, faGhost, faLeaf, faMoon, faMountain, faQuestion, faShieldAlt, faSnowflake, faStar, faTint, faVial } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pokemonList: IPokemonResult[] = [];

  isLoading: boolean = false;

  constructor(private service: PokemonService) { }

  ngOnInit(): void {
    this.isLoading = true;

    this.service
      .getPokemons()
      .pipe(switchMap((pokemons: IPokemon) => {
        this.pokemonList = pokemons.results;

        let forked: any = {};

        for( let i = 0; i <  pokemons.results.length; i++) {
          forked[pokemons.results[i].name] = this.service.getPokemonByLink(pokemons.results[i].url);
        }

        return forkJoin(forked);
      }))
      .subscribe({
        next: (details: any) => {
          this.pokemonList.map((pokemon: IPokemonResult) => {
            pokemon.details = details[pokemon.name];
          });

          this.isLoading = false;
        },
        error: (err: HttpErrorResponse) => {
          this.isLoading = false;
        }
      });
  }

  getIconForType(type: string): IconDefinition {
    switch (type) {
      case 'grass': return faLeaf;
      case 'fire': return faFire;
      case 'water': return faTint;
      case 'electric': return faBolt;
      case 'ice': return faSnowflake;
      case 'fighting': return faFistRaised;
      case 'poison': return faVial;
      case 'ground': return faMountain;
      case 'flying': return faFeatherAlt;
      case 'psychic': return faBrain;
      case 'bug': return faBug;
      case 'rock': return faGem;
      case 'ghost': return faGhost;
      case 'dragon': return faDragon;
      case 'dark': return faMoon;
      case 'steel': return faShieldAlt;
      case 'fairy': return faStar;
      default: return faQuestion;
    }
  }

  playPokemonSound(url: string): void {
    const pokemonSound: any = new Audio(url);

    pokemonSound.play();
  }
}
