import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EraseComponent } from './erase.component';

describe('EraseComponent', () => {
  let component: EraseComponent;
  let fixture: ComponentFixture<EraseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EraseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
