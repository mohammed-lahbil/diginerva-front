import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroComponent } from './hero.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;
  let matDialog: jasmine.SpyObj<MatDialog>;
  let dialogRef: jasmine.SpyObj<MatDialogRef<any>>;

  beforeEach(async () => {
    const matDialogSpy = jasmine.createSpyObj('MatDialog', ['open', 'closeAll']);
    const dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['afterClosed']);
    await TestBed.configureTestingModule({
      declarations: [ HeroComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      imports:[
        MatDialogModule,
        MatIconModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader
          }
        }),
      ],
      providers: [
        { provide: MatDialog, useValue: matDialogSpy },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    matDialog = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
    dialogRef = dialogRefSpy as jasmine.SpyObj<MatDialogRef<any>>;
    dialogRef.afterClosed.and.returnValue(of(true));
    matDialog.open.and.returnValue(dialogRef);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open a dialog', () => {
    component.openDialog();

    expect(matDialog.open).toHaveBeenCalledWith(component.videoDialog);
  });

  it('should subscribe to the afterClosed event of the dialog', () => {
    component.openDialog();

    expect(matDialog.open).toHaveBeenCalled();
    expect(matDialog.open).toHaveBeenCalledWith(component.videoDialog);
  });

  it('should close all open dialogs', () => {
    component.onClose();

    expect(matDialog.closeAll).toHaveBeenCalled();
  });
});
