import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceEditorComponent } from './exercice-editor.component';

describe('ExerciceEditorComponent', () => {
  let component: ExerciceEditorComponent;
  let fixture: ComponentFixture<ExerciceEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciceEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciceEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
