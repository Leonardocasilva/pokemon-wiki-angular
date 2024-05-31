import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule, NgbProgressbarConfig, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { PokeLoaderComponent } from './shared/components/poke-loader/poke-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokeLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    NgbProgressbarModule
  ],
  providers: [NgbProgressbarConfig],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(config: NgbProgressbarConfig) {
		config.max = 100;
		config.striped = true;
		config.animated = true;
		config.type = 'success';
		config.height = '20px';
	}
}
