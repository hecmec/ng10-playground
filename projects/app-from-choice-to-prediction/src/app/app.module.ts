import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataHelperService } from './data-helper.service';
import { HomePageComponent } from './home-page/home-page.component';
import { QuestionsPageComponent } from './questions-page/questions-page.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { AboutPageComponent } from './about-page/about-page.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, QuestionsPageComponent, ResultPageComponent, AboutPageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
