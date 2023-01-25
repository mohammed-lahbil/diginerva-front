import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  langUser = '';
  pageWidth: any;
  pageHeight: any;

  constructor(private translate: TranslateService) {}
  
  ngOnInit(){
    this.langUser = this.translate.currentLang === 'EN' ? 'English' : 'Français';
    this.pageWidth = window.innerWidth;
    this.pageHeight = window.innerHeight;
  }

  changeLang(lang: string){
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.langUser = lang === 'EN' ? 'English' : 'Français';
  }
}
