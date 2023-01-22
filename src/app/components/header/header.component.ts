import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  langUser = '';

  constructor(private translate: TranslateService) {}
  
  ngOnInit(){
    this.langUser = this.translate.currentLang;
  }

  changeLang(lang: string){
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.langUser = lang;
  }
}
