import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-insecure',
  templateUrl: './insecure.component.html'
})
export class InsecureComponent {
  @Input() userInput: string;

  // Dangerous evaluation of user input
  evaluateInput() {
    // This is highly insecure and should be avoided
    eval(this.userInput);
  }
}
