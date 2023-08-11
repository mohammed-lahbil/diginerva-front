import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
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
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { ServicesComponent } from './pages/services/services.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './pages/home/hero/hero.component';
import { MiniCardComponent } from './pages/home/mini-card/mini-card.component';
import { MiniServicesCardsComponent } from './pages/home/mini-services-cards/mini-services-cards.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { OurArticlesComponent } from './pages/home/our-articles/our-articles.component';
import { OurNewsComponent } from './pages/home/our-news/our-news.component';
import { GalleriaModule } from 'primeng/galleria';
import { OurTalentsComponent } from './pages/home/our-talents/our-talents.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { JoinOurTeamComponent } from './pages/about-us/join-our-team/join-our-team.component';
import { MiniTeamCardComponent } from './pages/about-us/mini-team-card/mini-team-card.component'; // Import the LayoutModule

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    ServicesComponent,
    AboutUsComponent,
    FooterComponent,
    HeroComponent,
    MiniCardComponent,
    MiniServicesCardsComponent,
    OurTalentsComponent,
    OurArticlesComponent,
    OurNewsComponent,
    JoinOurTeamComponent,
    MiniTeamCardComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatDividerModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatIconModule,
    GalleriaModule,
    MatMenuModule,
    MatSidenavModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
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
    this.matIconRegistry.addSvgIcon('blur', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/blur.svg'));
    this.matIconRegistry.addSvgIcon('semi-blur', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/semi-blur.svg'));
    this.matIconRegistry.addSvgIcon('lens-blur', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/lens-blur.svg'));
    this.matIconRegistry.addSvgIcon('long_arrow', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/long_arrow.svg'));
    this.matIconRegistry.addSvgIcon('play', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/play.svg'));
    this.matIconRegistry.addSvgIcon('close', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/close.svg'));
  }
}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
