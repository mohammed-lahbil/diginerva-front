import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule  } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatIconRegistry } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { ServicesComponent } from './pages/services/services.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './pages/home/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    ServicesComponent,
    AboutUsComponent,
    FooterComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon('menu', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/menu.svg'));
    this.matIconRegistry.addSvgIcon('expand_more', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/expand_more.svg'));
    this.matIconRegistry.addSvgIcon('send', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/send.svg'));
  }
}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
