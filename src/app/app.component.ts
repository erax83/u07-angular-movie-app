import { Component } from "@angular/core";
import { DbContactComponent } from "./db-contact/db-contact.component";
import { HttpClient } from "@angular/common/http";
import { DbservService } from "./dbserv.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "u07-angular-movie-app";

  // Variables
  userFilm: string = "";
  userActor: string = "";
  infoId: string = "";

  // Variables for recieved API-objects
  response: any;
  movieResponse: any;
  actorResponse: any;
  infoResponse: any;
  actorInfoResponse: any;
  popularResponse: any;

  // API-query related variables
  movieApi: string = "https://api.themoviedb.org/3/search/movie?api_key=";
  movieApiKey: string = "f8890476361ecd20500c162292f7b291";
  movieApiQuery: string = "&query=";
  infoApi: string = "https://api.themoviedb.org/3/movie/";
  infoApiKey: string = "?api_key=" + "f8890476361ecd20500c162292f7b291";
  popularApi: string = "https://api.themoviedb.org/3/trending/all/day?api_key=";
  actorApi: string = "https://api.themoviedb.org/3/search/person?api_key=";
  actorInfoApi: string = "https://api.themoviedb.org/3/person/";

  constructor(private http: HttpClient) {
    this.moviePopular();
  }

  ngOnInit() {}

  // Methods

  /* Search movie by name given by the user.
   The first line is a call to the API where userFilm is the input from the user.
   We then get a response with an objects corresponding with the query request.
   These objects can then be accesed in the html-file by using the movieResponse variable.
   */
  movieSearch() {
    this.http
      .get(
        this.movieApi + this.movieApiKey + this.movieApiQuery + this.userFilm
      )
      .subscribe(response => {
        this.movieResponse = response;
      });
  }

  // Search actor or other filmrelated person by name.
  actorSearch() {
    this.http
      .get(
        this.actorApi + this.movieApiKey + this.movieApiQuery + this.userActor
      )
      .subscribe(response => {
        this.actorResponse = response;
      });
  }

  // When you search films by filmname you get a list of matching titles.
  // When you click on a title this method is used to fetch data from that film.
  movieInfo(idResponse: string) {
    this.http
      .get(this.infoApi + idResponse + this.infoApiKey)
      .subscribe(response => {
        this.infoResponse = response;
      });
  }

  // Same logic as the previous method but with actors.
  actorInfo(idResponse: string) {
    this.http
      .get(this.actorInfoApi + idResponse + this.infoApiKey)
      .subscribe(response => {
        this.actorInfoResponse = response;
      });
  }

  // This method is called from the constructor when the program start to
  // get a list of new movies.
  moviePopular() {
    this.http.get(this.popularApi + this.movieApiKey).subscribe(response => {
      this.popularResponse = response;
    });
  }
}
