import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThucUongComponent } from './thuc-uong.component';

describe('ThucUongComponent', () => {
  let component: ThucUongComponent;
  let fixture: ComponentFixture<ThucUongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThucUongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThucUongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
