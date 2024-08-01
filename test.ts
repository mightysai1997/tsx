import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  fetchData(userInput: string) {
    this.http.get(`/api/data?query=${userInput}`).subscribe(data => {
      console.log(data);
    });
  }
}
