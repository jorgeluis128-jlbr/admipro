import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

// Modulo del sistema
import { PagesModule } from './pages/pages.module';

// Ruta del sistem
import { APP_ROUTES } from './app.routes';

// Temporal
import { FormsModule } from '@angular/forms';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

// Servicios
import { ServiceModule } from './services/service.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
