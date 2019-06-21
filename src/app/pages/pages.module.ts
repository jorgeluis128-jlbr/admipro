import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { FormsModule } from '@angular/forms';

// ng-2 charts plugin
import { ChartsModule } from 'ng2-charts';


// Termporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GrficodonaComponent } from '../components/grficodona/grficodona.component';



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GrficodonaComponent
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule
  ]
})

export class PagesModule {

}
