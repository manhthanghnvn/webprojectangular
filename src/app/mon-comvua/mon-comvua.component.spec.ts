import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonComvuaComponent } from './mon-comvua.component';

describe('MonComvuaComponent', () => {
  let component: MonComvuaComponent;
  let fixture: ComponentFixture<MonComvuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonComvuaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonComvuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
