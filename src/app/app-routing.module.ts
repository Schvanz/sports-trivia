import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConclusionPageComponent } from './conclusion-page/conclusion-page.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { QuestionsPageComponent } from './questions-page/questions-page.component';

const routes: Routes = [
  {
    path: '', component: IntroPageComponent
  },
  {
    path: 'questions', component: QuestionsPageComponent
  },
  {
    path: 'conclusion', component: ConclusionPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
