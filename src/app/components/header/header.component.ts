import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  langUser = '';
  pageWidth = 0;
  pageHeight = 0;

  constructor(private translate: TranslateService) {}

  ngOnInit(){
    this.langUser = this.translate.currentLang;
    this.pageWidth = window.innerWidth;
    this.pageHeight = window.innerHeight;
  }

  changeLang(lang: string){
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.langUser = lang;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.pageWidth = window.innerWidth;
    console.log(event);
  }
}
