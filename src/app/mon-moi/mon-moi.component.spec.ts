import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonMoiComponent } from './mon-moi.component';

describe('MonMoiComponent', () => {
  let component: MonMoiComponent;
  let fixture: ComponentFixture<MonMoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonMoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonMoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
