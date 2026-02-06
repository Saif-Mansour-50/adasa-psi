import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Notfound } from './components/notfound/notfound';
import { Details } from './components/details/details';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'contact', component: Contact, title: 'blog' },
  { path: 'about', component: About, title: 'about' },
  { path: 'details/:slug', component: Details, title: 'details' },
  { path: '**', component: Notfound },
];
