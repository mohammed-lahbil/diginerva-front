import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniServicesCardsComponent } from './mini-services-cards.component';

describe('MiniServicesCardsComponent', () => {
  let component: MiniServicesCardsComponent;
  let fixture: ComponentFixture<MiniServicesCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniServicesCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniServicesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
