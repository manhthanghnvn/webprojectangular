import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonComboComponent } from './mon-combo.component';

describe('MonComboComponent', () => {
  let component: MonComboComponent;
  let fixture: ComponentFixture<MonComboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonComboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
