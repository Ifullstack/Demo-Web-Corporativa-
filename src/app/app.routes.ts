import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Pages

import { ContactoComponent } from './pages/contacto/contacto.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { StartupRegistroComponent } from './pages/startup-registro/startup-registro.component';
import { EntidadRegistroComponent } from './pages/entidad-registro/entidad-registro.component';

const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'corporacion', component: RegistroComponent },
    { path: 'startup', component: StartupRegistroComponent },
    { path: 'entidad', component: EntidadRegistroComponent },
    { path: '**', component: NotFoundComponent },

];


export const APP_ROUTES = RouterModule.forRoot( ROUTES, {useHash: true});
