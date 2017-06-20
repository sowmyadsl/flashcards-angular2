import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizMeComponent } from './quiz-me.component';

describe('QuizMeComponent', () => {
  let component: QuizMeComponent;
  let fixture: ComponentFixture<QuizMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
