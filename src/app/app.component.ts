import { Component } from '@angular/core';
import {map} from "rxjs";
import {Store} from "@ngrx/store";
import {countSelector, decrease, increase, reset, updatedAtSelector} from "./reducers/counter";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'counter-ngrx';
  count$ = this.store.select(countSelector)
  cannotDecrease$ = this.count$.pipe(map(count => count <= 0));
  updatedAt$ = this.store.select(updatedAtSelector)

  constructor(private store: Store) {
  }

  increase (): void{
    this.store.dispatch(increase());
  }

  decrease(): void {
    this.store.dispatch(decrease());
  }

  reset(): void {
    this.store.dispatch(reset());
  }
}
