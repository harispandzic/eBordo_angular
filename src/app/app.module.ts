import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { DetaljiPovredaComponent } from './Upravljanje povredama/detalji-povreda/detalji-povreda.component';
import {FormsModule} from '@angular/forms';
import { UrediPovredaComponent } from './Upravljanje povredama/uredi-povreda/uredi-povreda.component';
import { DodajPovredaComponent } from './Upravljanje povredama/dodaj-povreda/dodaj-povreda.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PrikaziPovredeComponent } from './Upravljanje povredama/prikazi-povrede/prikazi-povrede.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DetaljiPovredaComponent,
    UrediPovredaComponent,
    DodajPovredaComponent,
    PrikaziPovredeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgbModule,
    RouterModule.forRoot([
      {path: 'povreda-prikaz', component: PrikaziPovredeComponent},
      {path: 'nesto-prikaz', component: PrikaziPovredeComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
