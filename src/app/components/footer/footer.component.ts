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
  date: Date = new Date();
  year: number = 0;

  constructor(private translate: TranslateService) {}
  
  ngOnInit(){
    this.pageWidth = window.innerWidth;
    this.pageHeight = window.innerHeight;
    this.year = this.date.getFullYear();
  }

  changeLang(lang: string){
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }
}
