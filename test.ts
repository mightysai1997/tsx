import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html'
})
export class ExampleComponent {
  @Input() userInput: string;

  // Insecure code: Using unsafe practices
  dangerousFunction() {
    // CWE-79: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting')
    // Vulnerability Type: Cross-Site Scripting (XSS)
    // Explanation: Directly assigning `userInput` to `innerHTML` without sanitization
    // allows attackers to inject malicious scripts into the page. This could lead
    // to unauthorized actions, data theft, or other security issues. Angular's built-in
    // sanitization should be used to avoid this type of vulnerability.
    document.getElementById('output').innerHTML = this.userInput;
  }
}
