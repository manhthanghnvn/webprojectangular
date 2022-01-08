import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonAnkemComponent } from './mon-ankem.component';

describe('MonAnkemComponent', () => {
  let component: MonAnkemComponent;
  let fixture: ComponentFixture<MonAnkemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonAnkemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonAnkemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
