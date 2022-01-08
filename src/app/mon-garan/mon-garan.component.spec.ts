import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonGaranComponent } from './mon-garan.component';

describe('MonGaranComponent', () => {
  let component: MonGaranComponent;
  let fixture: ComponentFixture<MonGaranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonGaranComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonGaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
