import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-eval',
  template: `<button (click)="executeCode()">Run Code</button>`
})
export class DynamicEvalComponent {
  userCode: string = 'alert("Hello World")'; // Code from user input

  executeCode() {
    // Dangerous: Executes code input by the user
    eval(this.userCode);
  }
}
