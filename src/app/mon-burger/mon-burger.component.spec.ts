import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonBurgerComponent } from './mon-burger.component';

describe('MonBurgerComponent', () => {
  let component: MonBurgerComponent;
  let fixture: ComponentFixture<MonBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonBurgerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
