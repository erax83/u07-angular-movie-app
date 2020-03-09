import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DbContactComponent } from './db-contact/db-contact.component';

import { DbservService } from './dbserv.service';

@NgModule({
  declarations: [
    AppComponent,
    DbContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DbservService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
