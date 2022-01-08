import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonLeComponent } from './mon-le.component';

describe('MonLeComponent', () => {
  let component: MonLeComponent;
  let fixture: ComponentFixture<MonLeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonLeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonLeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
