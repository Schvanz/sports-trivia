import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConclusionPageComponent } from './conclusion-page/conclusion-page.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { PipesModule } from './pipes/pipes.module';
import { QuestionsPageComponent } from './questions-page/questions-page.component';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    IntroPageComponent,
    QuestionsPageComponent,
    ConclusionPageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    AppRoutingModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
