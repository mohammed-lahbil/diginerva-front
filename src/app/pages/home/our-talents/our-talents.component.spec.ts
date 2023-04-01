import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTalentsComponent } from './our-talents.component';

describe('OurTalentsComponent', () => {
  let component: OurTalentsComponent;
  let fixture: ComponentFixture<OurTalentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurTalentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurTalentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
