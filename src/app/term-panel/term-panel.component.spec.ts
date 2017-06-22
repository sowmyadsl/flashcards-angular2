import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermPanelComponent } from './term-panel.component';

describe('TermPanelComponent', () => {
  let component: TermPanelComponent;
  let fixture: ComponentFixture<TermPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
