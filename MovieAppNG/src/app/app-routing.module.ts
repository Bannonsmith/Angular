import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { MoviePageComponent } from './components/movie-page/movie-page.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactusComponent},
  {path: 'movies', component: MoviePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
