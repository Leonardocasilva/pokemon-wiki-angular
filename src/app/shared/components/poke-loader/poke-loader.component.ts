import { Component, Input, OnInit } from '@angular/core';
import { LoadingText } from '../../models/loading-text';

@Component({
  selector: 'poke-loader',
  templateUrl: './poke-loader.component.html',
  styleUrls: ['./poke-loader.component.scss']
})
export class PokeLoaderComponent implements OnInit {
  @Input() isLoading: boolean = false;

  loadingPosition: number = 0;

  loadingPayload: string[] = LoadingText;

  loadingTextDisplay: string = '';

  ngOnInit(): void {
    this.loadingTextDisplay = this.loadingPayload[this.loadingPosition];

    setInterval(() => {
      this.loadingTextDisplay = this.loadingPayload[this.loadingPosition];
      this.loadingPosition += 1;

      if (this.loadingPosition > this.loadingPayload.length) {
        this.loadingPosition = 0;
      }
    }, 2000);
  }
}
