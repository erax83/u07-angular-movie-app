import { Component } from '@angular/core';
import { DbContactComponent } from './db-contact/db-contact.component';
import { HttpClient } from '@angular/common/http';
import { DbservService } from './dbserv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'u07-angular-movie-app';

  userName: string = '';
  userFilm: string = '';
  response: any;
  movieResponse: any;
  movieApi: string = 'https://api.themoviedb.org/3/search/movie?api_key=';
  movieApiKey: string = 'f8890476361ecd20500c162292f7b291';
  movieApiQuery: string = '&query=';


  constructor(private svc: DbservService, private http: HttpClient) {
   this.svc.printToConsole();
  }

  ngOnInit() {
    let obs = this.http.get('https://api.github.com/users/erax83');
    obs.subscribe((response) => console.log(response));

    let movieObs = this.http.get(this.movieApi + this.movieApiKey + this.movieApiQuery + 'seven');
    movieObs.subscribe((movieResponse) => console.log(movieResponse));
  }

  search() {
    this.http.get('https://api.github.com/users/' + this.userName)
    .subscribe((response) => {
      this.response = response;
      console.log(this.response);
    });
  }

  movieSearch() {
    this.http.get(this.movieApi + this.movieApiKey + this.movieApiQuery + this.userFilm)
    .subscribe((response) => {
      this.movieResponse = response;
      console.log(this.movieResponse);
    });
  }

}
