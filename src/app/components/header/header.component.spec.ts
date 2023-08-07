import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      imports:[
        MatMenuModule,
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader
          }
        }),
      ],
      providers: [
        TranslateService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    translateService = TestBed.inject(TranslateService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update pageWidth when window is resized', () => {
    const mockInnerWidth = 800; // Set the mock window.innerWidth value

    // Manually trigger the window resize event
    const resizeEvent = document.createEvent('Event');
    resizeEvent.initEvent('resize', true, true);
    (window as any).innerWidth = mockInnerWidth;
    window.dispatchEvent(resizeEvent);

    // Check if pageWidth is updated correctly
    expect(component.pageWidth).toEqual(mockInnerWidth);
  });

  it('should set default lang and use lang from TranslateService', () => {
    const lang = 'en';

    component.changeLang(lang);

    // Check if langUser is updated correctly
    expect(component.langUser).toEqual(lang);

    // Check if the setDefaultLang method is called with the correct argument
    expect(translateService.getDefaultLang()).toEqual(lang);

    // Check if the use method is called with the correct argument
    expect(translateService.currentLang).toEqual(lang);
  });

});
