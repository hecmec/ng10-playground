import { Component, OnInit } from '@angular/core';
import { Hero, HeroService } from '../../services/hero.service';

@Component({
  selector: 'rx-hero-table',
  template: `
    <div class="tool-bar">
      <span class="search-tool">
        <label for="herosearch">Search: </label>
        <input name="herosearch" />
      </span>
      <span class="page-tool">
        <label>Page ? of ? : </label>
        <span class="buttons">
          <button class="prev">Prev</button>
          <button class="next">Next</button>
        </span>
      </span>
      <span class="result-tool">
        <label>Show Results: </label>
        <span class="buttons">
          <button *ngFor="let limit of hero.limits">
            {{ limit }}
          </button>
        </span>
      </span>
      <span class="total-tool">
        <label>Total Results: ???</label>
      </span>
    </div>
    <div class="table-content">
      <rx-hero-badge *ngFor="let hero of heroes" [hero]="hero"></rx-hero-badge>
    </div>
  `,
  styleUrls: ['./hero-table.component.scss'],
})
export class HeroTableComponent implements OnInit {
  heroes: Hero[];

  constructor(public hero: HeroService) {
    hero.heroes$.subscribe((heroes) => {
      this.heroes = heroes;
    });
  }

  ngOnInit() {}
}
