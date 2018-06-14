import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes';
// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { SectionComponent } from './components/section/section.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { HomeComponent } from './components/home/home.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { StartupRegistroComponent } from './pages/startup-registro/startup-registro.component';
import { EntidadRegistroComponent } from './pages/entidad-registro/entidad-registro.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    ServiciosComponent,
    BlogComponent,
    ContactoComponent,
    NotFoundComponent,
    RegistroComponent,
    AdministradorComponent,
    HomeComponent,
    Navbar2Component,
    StartupRegistroComponent,
    EntidadRegistroComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
