import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  langUser = '';
  pageWidth = 0;
  pageHeight = 0;
  date: Date = new Date();
  year = 0;
  contactForm: FormGroup = new FormGroup({});

  constructor(private translate: TranslateService) {}

  ngOnInit(){
    this.pageWidth = window.innerWidth;
    this.pageHeight = window.innerHeight;
    this.year = this.date.getFullYear();
    this.contactForm = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      message: new FormControl()
    })
  }

  changeLang(lang: string){
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }
}
