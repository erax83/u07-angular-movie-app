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

  
  userFilm: string = '';
  userActor: string = '';
  infoId: string = '';
  response: any;
  movieResponse: any;
  actorResponse: any;
  infoResponse: any;
  actorInfoResponse: any;
  popularResponse: any;
  movieApi: string = 'https://api.themoviedb.org/3/search/movie?api_key=';
  movieApiKey: string = 'f8890476361ecd20500c162292f7b291';
  movieApiQuery: string = '&query=';
  infoApi: string = 'https://api.themoviedb.org/3/movie/';
  infoApiKey: string = '?api_key=' + 'f8890476361ecd20500c162292f7b291';
  popularApi:string = 'https://api.themoviedb.org/3/trending/all/day?api_key=';
  actorApi: string = 'https://api.themoviedb.org/3/search/person?api_key=';
  actorInfoApi: string = 'https://api.themoviedb.org/3/person/';


  constructor(private svc: DbservService, private http: HttpClient) {
   this.svc.printToConsole();

   this.moviePopular();

  }

  ngOnInit() {
    let movieObs = this.http.get(this.movieApi + this.movieApiKey + this.movieApiQuery + 'seven');
    movieObs.subscribe((movieResponse) => console.log(movieResponse));

  }

  movieSearch() {
    this.http.get(this.movieApi + this.movieApiKey + this.movieApiQuery + this.userFilm)
    .subscribe((response) => {
      this.movieResponse = response;
      console.log(this.movieResponse);
      
    });
  }

  actorSearch() {
    this.http.get(this.actorApi + this.movieApiKey + this.movieApiQuery + this.userActor)
    .subscribe((response) => {
      this.actorResponse = response;
      console.log(this.actorResponse);
      
    });
  }

  movieInfo(idResponse: string) {
    this.http.get(this.infoApi + idResponse + this.infoApiKey)
    .subscribe((response) => {
      this.infoResponse = response;
    });
    console.log(idResponse);
  }

  actorInfo(idResponse: string) {
    this.http.get(this.actorInfoApi + idResponse + this.infoApiKey)
    .subscribe((response) => {
      this.actorInfoResponse = response;
    });
    console.log(idResponse);
  }

  moviePopular() {
    this.http.get(this.popularApi + this.movieApiKey)
    .subscribe((response) => {
      this.popularResponse = response;
    });
    console.log(this.popularResponse);
  }

}


