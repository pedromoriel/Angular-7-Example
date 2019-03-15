import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './pages/about/about.component';
import {HomeComponent} from './pages/home/home.component';
import {PicturesComponent} from './pages/pictures/pictures.component';
import {ContactComponent} from './pages/contact/contact.component';
import {CollectionsComponent} from './pages/collections/collections.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'pictures', component: PicturesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'collections', component: CollectionsComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
