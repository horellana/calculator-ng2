import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  inputs = [{name: 'a', value: 0},
            {name: 'b', value: 0},
            {name: 'c', value: 0}];

  c : number = 0;

  onInput(event: any) {
    this.c = this.inputs.map(i => i.value).reduce((a, b) => +a + +b);
  }
}