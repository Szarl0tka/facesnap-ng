import { Component, OnInit } from '@angular/core';
import { filter, interval, map, Observable, take, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  interval$!: Observable<string>;

  ngOnInit() {
    this.interval$ = interval(1000).pipe(
      take(10),
      // opérateur de bas niveau qui permet de filtrer les émissions d'un Observable
      filter(value => value % 3 === 0),
      // opérateur de bas niveau qui permet de transformer les émissions d'un Observable
      map((value: number) => value %2 === 0 ? 
      `Je suis ${value} et je suis un nombre pair.` : `Je suis ${value} et je suis un nombre impair.`),
      tap(text => this.logger(text))
    );
  }

  logger(text: string): void {
      console.log(`Log: ${text}`);
  }
}