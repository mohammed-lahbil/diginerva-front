import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutUsComponent } from './about-us.component';
import { MiniTeamCardComponent } from './mini-team-card/mini-team-card.component'; // Import MiniTeamCardComponent
import { JoinOurTeamComponent } from './join-our-team/join-our-team.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { GalleriaModule } from 'primeng/galleria';
import { MatDividerModule } from '@angular/material/divider';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
describe('AboutUsComponent', () => {
  let component: AboutUsComponent;
  let fixture: ComponentFixture<AboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsComponent ],
      imports:[
      declarations: [ AboutUsComponent , MiniTeamCardComponent,JoinOurTeamComponent ], // Add MiniTeamCardComponent
      imports:[
        MatDialogModule,
        MatIconModule,
        GalleriaModule,
        MatDividerModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader
          }
        }),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
